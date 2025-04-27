"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { PiMicrosoftWordLogoBold,PiMicrosoftPowerpointLogoFill } from "react-icons/pi"
import { SiAdobephotoshop } from "react-icons/si";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Looking for a challenging role so that I can use my skills and capabilities through sincere dedication and hard work for successful career.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Karan Danger",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9909812390",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "karan ahir",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "dangarkaran70@gmail.com",
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
    "Clinic all work",
  items: [
    {
      company: "Shiv clinic (talala)",
      position: "HOSPITAL STAFF",
      duration: "2020 - 2023 ",
    },
    {
      company: "JAMNAGAR MUNICIPAL CORPORATION",
      position: "MPHW Covid duty",
      duration: "2019 - 2020",
    },
    {
      company: "BAPA SITARAM HOSPITAL (TALALA)",
      position: "HOSPITAL STAFF",
      duration: "2016 - 2018",
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
      institution: "SHRI SAURABH ARTS COLLEGE,VISANVEL,",
      degree: "GRADUATION",
      duration: "2023",
    },
    {
      institution: "CCHN- ADM ITI-JAMKHAMBHALIYA",
      degree: "CCHN- ADM ",
      duration: "2022 - Pursuing",
    },
    {
      institution: "HEALTH SANITARYITI -GIR SOMNATH INSPECTOR",
      degree: "ITI -GIR SOMNATH",
      duration: "2021 - Pursuing ",
    },
    {
      institution: "SHREE VIVEKANAND HIGHER SECONDARY SCHOOL - BARULA(GIR)",
      degree: "H.S.C",
      duration: " Pursuing ",
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
      icon: <PiMicrosoftWordLogoBold />,
      name: "MICROSOFT",
    },
    {
      icon: <PiMicrosoftPowerpointLogoFill />,
      name: "POWERPOINT",
    },
    {
      icon: <SiAdobephotoshop  />,
      name: "Adobephotoshop",
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
                <p className="max-w-[600px] text-primary mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#DAD2FF] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <span className="text-[#493D9E]">{item.duration}</span>
                          <h3 className="text-xl text-[#493D9E] max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-default"></span>
                            <p className="text-black/60">{item.company}</p>
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
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#DAD2FF] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <span className="text-primary">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-default"></span>
                            <p className="text-primary">{item.institution}</p>
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
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
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
                            <TooltipTrigger className="w-full h-[150px] bg-[#DAD2FF] rounded-xl flex justify-center items-center group">
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
                <p className="max-w-[600px] text-de mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-black min-w-[20px]:">
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
