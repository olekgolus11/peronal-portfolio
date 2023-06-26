import projectPaneTexts from "@/utils/texts/projectPaneTexts";
import MyWorkGradientBackground from "../MyWorkGradientBackground/MyWorkGradientBackground";
import ProjectPane from "../ProjectPane/ProjectPane";
import TextSlider from "../TextSlider/TextSlider";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import isDeviceMobile from "@/utils/functions/isDeviceMobile";

const MyProjectsSection = () => {
  const sectionRef = useRef(null!);
  const triggerRef = useRef(null!);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isDeviceMobile());
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let mm = gsap.matchMedia();
    let pin: any = null;
    const SCROLL_COUNT = 12;
    const SLIDES_COUNT = projectPaneTexts.length;
    const SLIDE_LENGTH = (SLIDES_COUNT - 1) * 100;

    mm.add("(min-width: 768px)", () => {
      pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: `-${SLIDES_COUNT - 1}00vw`,
          ease: "none",
          duration: 3,
          scrollTrigger: {
            trigger: triggerRef.current,
            scrub: true,
            pin: true,
            end: `+=${SCROLL_COUNT * SLIDE_LENGTH}vw`,
          },
        }
      );
    });

    return () => {
      pin && pin.kill();
    };
  }, []);

  const createMyProjectsSection = () => {
    const stickyBackground = () => (
      <div className="sticky top-0">
        <TextSlider text="MY WORK" />
        <MyWorkGradientBackground />
      </div>
    );

    const projectPanes = () =>
      projectPaneTexts.map((projectPaneText) => (
        <div className="w-screen flex-none">
          <ProjectPane {...projectPaneText} />
        </div>
      ));

    return (
      <>
        {isMobile ? stickyBackground() : null}
        <div className="overflow-hidden h-full md:h-[100vh]" ref={triggerRef}>
          {isMobile ? null : stickyBackground()}
          <div className="flex flex-col md:flex-row" ref={sectionRef}>
            {projectPanes()}
          </div>
        </div>
      </>
    );
  };

  return createMyProjectsSection();
};

export default MyProjectsSection;
