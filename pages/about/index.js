import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiPython,
  SiDart,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiFirebase,
  SiApachespark,
  SiApachehive,
  SiApachehadoop,
  SiKubernetes,
  SiDocker,
  SiApacheairflow,
} from "react-icons/si";

import Image from "next/image";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Data Engineering Stack",
        icons: [
          <SiApachespark key="apache" />,
          <SiApachehive key="hive" />,
          <SiApachehadoop key="hadoop" />,
          <SiKubernetes key="k8s" />,
          <SiDocker key="docker" />,
          <SiApacheairflow key="airflow" />,
        ],
      },
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaNodeJs key="node" />,
          <SiNextdotjs key="next" />,
          <SiExpress key="express" />,
        ],
      },
      // {
      //   title: "App Development",
      //   icons: [<SiFlutter key="flutter" />],
      // },
      {
        title: "Programming Languages",
        icons: [
          <SiC key="c" />,
          <SiCplusplus key="c++" />,
          <FaJava key="java" />,
          <SiPython key="python" />,
          <SiDart key="dart" />,
        ],
      },
      {
        title: "Databases",
        icons: [
          <SiMongodb key="mongodb" />,
          <SiMysql key="sql" />,
          <SiFirebase key="firebase" />,
        ],
      },
      {
        title: "Developer Tools",
        icons: [
          <SiVisualstudiocode key="vscode" />,
          <SiGit key="git" />,
          <SiGithub key="github" />,
          <FaFigma key="figma" />,
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "SRM University AP - B.Tech (CSE)",
        stage: "2021 - 2025",
      },
      {
        title: "Sri GCSR Junior College",
        stage: "2019 - 2021",
      },
      {
        title: "GMR V DAV Public School",
        stage: "2009 - 2019",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Seagate Technology (Big Data Engineer)",
        stage: "Jul 2024 - Present",
      },
      {
        title: "CodeSwap Solutions (Web Developer)",
        stage: "Jun 2023 - Aug 2023",
      },
      {
        title: "Zetpeak Company (App Developer)",
        stage: "Jun 2023 - Sep 2023",
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";
import NewAvatar from "../../components/NewAvatar";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Creating my own <span className="text-accent">sunshine</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden lg:block"
          >
            I believe I am a very organized individual. I achieve my goals and
            targets by setting realistic goals with a timeframe I can work with.
            I am developing new ways to achieve my goals creatively and work in
            order of relevance and urgency. I do like to be on top of my work
            and use lists and calendars to my advantage. If I were to describe
            myself in a few words, I would say I am hard-working and a quick
            learner.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:flex md:max-w-0 xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Internship Experience
                </div>
              </div>
              {/* Leetcode Problems */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Leetcode Problems
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className={`${
                    index === itemindex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemindex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 zl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 ic text-white/60"
                >
                  {/* title */}
                  <div className="mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex ">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemindex) => {
                      return (
                        <div className="text-2xl" key="">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
