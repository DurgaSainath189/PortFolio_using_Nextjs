//next image
import Image from "next/image";

//components
import ParticleContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";


//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";
import NewAvatar from "../components/NewAvatar";

const Home = () => {
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
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas
            <br /> Into <span className="text-accent">Digital Relality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis libero esse eos, fugiat a neque similique sed sunt
            veniam illum ipsum harum consectetur distinctio quia sit commodi
            tenetur voluptates facere.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg-img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge z-0"></div>
        {/* particles */}
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
          <ParticleContainer />
        </div>

        {/* avatar image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <NewAvatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
