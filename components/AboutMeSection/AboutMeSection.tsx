import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutMeGradientBackground from "../AboutMeGradientBackground/AboutMeGradientBackground";
import Image from "next/image";
import Photo2 from "@/public/photo2.jpg";

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
    const tl = gsap.timeline();
    gsap.to("#about-me-biography-container", {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about-me-biography-container",
        scrub: 0.5,
        pin: true,
        start: "top 20%",
        end: "bottom top",
      },
    });
    gsap.from("#about-me-biography-p-2", {
      translateY: "100vh",
      duration: 1,
      scrollTrigger: {
        trigger: "#about-me-biography-container",
        start: "top 70%",
        end: "+=700",
        scrub: 0.5,
        markers: true,
      },
    });
    gsap.from("#about-me-biography-p-3", {
      translateY: "100vh",
      duration: 1,
      scrollTrigger: {
        trigger: "#about-me-biography-container",
        start: "top 50%",
        end: "+=700",
        scrub: 0.5,
        markers: true,
      },
    });
    gsap.from("#about-me-biography-p-4", {
      translateY: "100vh",
      duration: 1,
      scrollTrigger: {
        trigger: "#about-me-biography-container",
        start: "top 30%",
        end: "+=700",
        scrub: 0.5,
        markers: true,
      },
    });

    animateLine("#about-me-intro-line-1", "6vw", "-9vw");
    animateLine("#about-me-intro-line-2", "-8vw", "9vw");
    animateLine("#about-me-intro-line-3", "8vw", "-7vw");
    animateLine("#about-me-intro-line-4", "-5vw", "8vw");
  }, []);

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
      <div
        id='about-me-biography-container'
        className='page-container-l flex gap-16 h-[200vh] items-start'
      >
        <div className='text-p-xl font-sans font-light mix-blend-difference'>
          <div id='about-me-biography-p-1'>
            I've always been a person who wanted to express himself so to match
            my creativity with my passion for technology I started learning 3D
            graphics in blender.
          </div>
          <br />
          <div id='about-me-biography-p-2'>
            I've had so much fun with it but I wanted to do something more,
            something that I could connect it with my programming skills.
          </div>
          <br />
          <div id='about-me-biography-p-3'>
            That's why I started learning front-end development and just after
            few months I had an opportunity to work as a front-end developer
            trainee in IDEMIA.
          </div>
          <br />
          <div id='about-me-biography-p-4'>
            My main goal was to be a fullstack developer and so right after I
            finished my internship I got myself into another one but this time
            as a fullstack developer.
          </div>
        </div>
        <Image
          src={Photo2}
          className='w-[30vw] ml-auto object-contain'
          alt='elo'
        />
        {/* <img src='photo2.jpg' className='max-h-[90vh] ml-auto' /> */}
      </div>
    </>
  );
};

export default AboutMeSection;
