"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "I'm a collaborative and results-oriented web developer with a knack for solving complex problems and building high-performing web applications. I thrive in team environments and enjoy translating design concepts into functional and user-friendly web experiences. My expertise includes HTML, CSS, JavaScript, and frameworks like React and Angular. I'm also passionate about continuous learning and staying up-to-date with the latest web development trends.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Manish Ambaliya",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9773052768",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "manish ahir",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "manishahir41@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati ",
    },
  ],
};

// experience data
const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Gained practical experience in back-end development Developed and maintained code for 10 client websites primarily using HTML, CSS, JavaScript, Noje.js and php Collaborated with a team of 4 developers, gaining valuable teamwork experience Worked on API integration and developed functionality for systems using APIs.",
  items: [
    {
      company: "Tech Solutions",
      position: "Full Stack Developer",
      duration: "2025 - Present",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designing",
      duration: "2023 - 2024",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2023",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2022",
    },
    {
      company: "Tech Academy",
      position: "Technical Assistant",
      duration: "2020-2021",
    },
  ],
};

// education data
const education = {
  icons: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "the process of learning and gaining knowledge, skills, and understanding, encompassing both formal schooling and informal learning experiences",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2022",
    },
    {
      institution: "Sheryians Coding School",
      degree: "Graphic Design",
      duration: "2022",
    },
    {
      institution: "Balaji Institute of Engineering & Technology",
      degree: "Drop-Out in electronic and communication",
      duration: "2013",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "the process of learning and gaining knowledge, skills, and understanding, encompassing both formal schooling and informal learning experiences",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },

    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row justify-center gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-1 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience content  */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <span className="text-default">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-default"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education content*/}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <span className="text-default">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-default"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills content  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillsList.map((item, index) => {
                    return (
                      <li
                        key={index}
                        // className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-default transition-all duration-300">
                                <p className="capitalize">{item.icon}</p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="text-2xl bg-transparent">
                              {item.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About content  */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 min-w-[20px]:">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
