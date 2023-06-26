import MyWorkGradientBackground from "../MyWorkGradientBackground/MyWorkGradientBackground";
import TextSlider from "../TextSlider/TextSlider";

const AboutMeSection = () => {
  return (
    <>
      <div className="sticky top-0 -z-10">
        <TextSlider text="ABOUT ME" />
        <MyWorkGradientBackground />
      </div>
      <div className="page-container font-sans font-light">
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
