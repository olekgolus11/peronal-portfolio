import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutMeGradientBackground from "../AboutMeGradientBackground/AboutMeGradientBackground";

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  useEffect(() => {
    const animateLine = (lineId: string, initialX: string, finalX: string) => {
      gsap.fromTo(
        lineId,
        { x: initialX },
        {
          x: finalX,
          ease: "none",
          scrollTrigger: {
            trigger: lineId,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    };

    animateLine("#about-me-line-1", "6w", "-9vw");
    animateLine("#about-me-line-2", "-8vw", "9vw");
    animateLine("#about-me-line-3", "8vw", "-7vw");
    animateLine("#about-me-line-4", "-5vw", "8vw");
  }, []);

  const createIntroducingText = () => {
    return (
      <p className='text-h4 font-sans font-light mix-blend-difference'>
        <div id='about-me-line-1'>
          Hi! I'm <span className='font-italic'>Aleksander.</span>
        </div>
        <div id='about-me-line-2'>I'm a 21 years old</div>
        <div id='about-me-line-3' className='font-italic whitespace-nowrap'>
          front-end developer
        </div>
        <div id='about-me-line-4'>
          from <span className='font-italic'>Poland.</span>
        </div>
      </p>
    );
  };

  return (
    <>
      <div className='sticky top-0 -z-10'>
        <AboutMeGradientBackground />
      </div>
      <div className='page-container h-screen flex items-center'>
        {createIntroducingText()}
      </div>
    </>
  );
};

export default AboutMeSection;
