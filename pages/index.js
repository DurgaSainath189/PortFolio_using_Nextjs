// Import necessary modules and components
import ParticleContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import NewAvatar from "../components/NewAvatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import ResumeDownloadButton from "../components/ResumeDownloadButton";

// Create the Home component
const Home = () => {
  // Function to get the current time of the day
  const getCurrentTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 1 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  // Get the current time
  const greetingTime = getCurrentTime();

  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30"
      >
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* greeting message */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mt-4"
          >
            Good <span className="text-accent">{greetingTime}</span>,
          </motion.h1>
          {/* name and role with type animation */}
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span>I&apos;m </span>
            <TypeAnimation
              sequence={[
                "Durga Sainath",
                2000,
                "a Web Developer",
                2000,
                "an Android Developer",
                2000,
                "a Designer",
                2000,
              ]}
              speed={25}
              repeat={Infinity}
              className="text-accent"
            />
          </motion.h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg text-white"
          >
            I am a versatile developer and designer skilled in web and Android
            development, with expertise in HTML, CSS, JavaScript, Dart, Flutter,
            and modern frameworks. My portfolio showcases a diverse range of
            projects, reflecting my commitment to creating innovative and
            user-centric solutions.
          </motion.p>
          {/* button and resume link */}
          <div className="flex flex-col items-center xl:flex-row xl:justify-between relative">
            <div className="hidden xl:flex items-center">
              <ProjectBtn />
              <ResumeDownloadButton />
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1125px] h-full absolute right-0 bottom-0">
        {/* bg-img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge z-0"></div>
        {/* particles */}
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
          <ParticleContainer />
        </div>
        {/* avatar image */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <NewAvatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
