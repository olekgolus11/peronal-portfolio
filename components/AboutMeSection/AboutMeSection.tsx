import AboutMeGradientBackground from "../AboutMeGradientBackground/AboutMeGradientBackground";

const AboutMeSection = () => {
  return (
    <>
      <div className="sticky top-0 -z-10">
        <AboutMeGradientBackground />
      </div>
      <div className="page-container font-sans font-light h-screen flex items-center mix-blend-difference">
        <p className="text-h4">
          Hi! I'm <span className="font-italic">Aleksander.</span>
          <br />
          I'm a 21 years old{" "}
          <span className="font-italic whitespace-nowrap">
            front-end developer
          </span>{" "}
          from <span className="font-italic">Poland.</span>
        </p>
      </div>
    </>
  );
};

export default AboutMeSection;
