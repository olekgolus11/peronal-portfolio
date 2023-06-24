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
    let mm = gsap.matchMedia();
    let pin: any = null;

    mm.add("(min-width: 768px)", () => {
      pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-200vw",
          ease: "none",
          duration: 3,
          scrollTrigger: {
            trigger: triggerRef.current,
            scrub: 0.6,
            pin: true,
          },
        }
      );
    });

    mm.add("(max-width: 768px)", () => {
      pin = gsap.fromTo(
        sectionRef.current,
        {
          translateY: 0,
        },
        {
          translateY: "-200vh",
          ease: "none",
          duration: 2,
          scrollTrigger: {
            trigger: triggerRef.current,
            scrub: 0.0,
            pin: true,
          },
        }
      );
    });

    return () => {
      pin && pin.kill();
    };
  }, []);

  return (
    <div className='overflow-hidden h-[200vh]' ref={triggerRef}>
      <div className='sticky top-0'>
        <TextSlider text='MY WORK' />
        <MyWorkGradientBackground />
      </div>
      <div className='flex flex-col md:flex-row ' ref={sectionRef}>
        {projectPaneTexts.map((projectPaneText) => (
          <div className='w-screen flex-none'>
            <ProjectPane {...projectPaneText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjectsSection;
