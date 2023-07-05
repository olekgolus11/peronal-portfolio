import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AboutMeGradientBackground from "../AboutMeGradientBackground/AboutMeGradientBackground";
// import Image from "next/image";
// import Photo2 from "@/public/photo2.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutMeSection = () => {
  const biographyRef = useRef(null!);
  const pinContainerRef = useRef(null!);

  const animateLine = (lineId: string, initialX: string, finalX: string) =>
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

  const animateParapgraph = (elementId: string, start: string) =>
    gsap.fromTo(
      elementId,
      { y: "100vh" },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: biographyRef.current,
          scrub: 0.5,
          start,
          end: "+=500",
        },
      }
    );

  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];

    tweens.push(animateLine("#about-me-intro-line-1", "6vw", "-9vw"));
    tweens.push(animateLine("#about-me-intro-line-2", "-8vw", "9vw"));
    tweens.push(animateLine("#about-me-intro-line-3", "8vw", "-7vw"));
    tweens.push(animateLine("#about-me-intro-line-4", "-5vw", "8vw"));

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, []);

  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];

    tweens.push(
      gsap.to("#about-me-biography-content", {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: biographyRef.current,
          scrub: 0.5,
          pin: pinContainerRef.current,
          start: "top 20%",
          end: "bottom bottom",
        },
      })
    );

    tweens.push(animateParapgraph("#about-me-biography-p-1", "top bottom"));
    tweens.push(animateParapgraph("#about-me-biography-p-2", "15% 20%"));
    tweens.push(animateParapgraph("#about-me-biography-p-3", "30% 20%"));
    tweens.push(animateParapgraph("#about-me-biography-p-4", "45% 20%"));

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  });

  const createIntroducingText = () => {
    return (
      <p className='text-h4 font-sans font-light mix-blend-difference'>
        <div id='about-me-intro-line-1'>
          Hi! I'm <span className='font-italic'>Aleksander.</span>
        </div>
        <div id='about-me-intro-line-2'>I'm a 21 years old</div>
        <div
          id='about-me-intro-line-3'
          className='font-italic whitespace-nowrap'
        >
          front-end developer
        </div>
        <div id='about-me-intro-line-4'>
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
      <div ref={biographyRef} className='h-[300vh] mix-blend-difference'>
        <div ref={pinContainerRef}>
          <div
            id='about-me-biography-content'
            className='page-container flex gap-16 items-start'
          >
            <p className='text-p-2xl font-sans font-light'>
              <div id='about-me-biography-p-1'>
                I've always been a person who wanted to express himself so to
                match my creativity with my passion for technology I started
                learning 3D graphics in blender.
              </div>
              <br />
              <div id='about-me-biography-p-2'>
                I've had so much fun with it but I wanted to do something more,
                something that I could connect it with my programming skills.
              </div>
              <br />
              <div id='about-me-biography-p-3'>
                That's why I started learning front-end development and just
                after few months I had an opportunity to work as a front-end
                developer trainee in IDEMIA.
              </div>
              <br />
              <div id='about-me-biography-p-4'>
                My main goal was to be a fullstack developer and so right after
                I finished my internship I got myself into another one but this
                time as a fullstack developer.
              </div>
            </p>
            {/* <Image
              src={Photo2}
              className='w-[30vw] max-h-[50vh] h-full ml-auto object-contain'
              alt='me'
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
