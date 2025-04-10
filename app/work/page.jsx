"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import WorkSlideBtns from "@/components/ui/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Portfolio",
    description:
      "create a project html, css and javascript. fast project in uploaded in github ",
    stack: [
      {
        name: "Html",
      },
      {
        name: "css",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "Live Project",
    Github: "Github Repository",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Hotel-Management",
    description:
      "create a project using php, bootstrap-css and javascript and implement Admin-panel and Payment gateway",
    stack: [
      {
        name: "php",
      },
      {
        name: "Bootstrap.css",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/Untitled-2.png",
    live: "Live Project",
    Github: "Github Repository",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Uber-clone",
    description:
      "create a Uber-clone project using react and node.js with mongoDb data bash and implement google map and  ",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/Untitled-1.png",
    live: "Live Project",
    Github: "Github Repository",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange =(swiper)=>{
  
   const currentIndex = swiper.activeIndex;
   
   setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,
        transition:{delay:2.4,duration:0.4, ease:"easeIn"}
       }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="group flex flex-col gap-[30px] h-[50%]">
              {/* project num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-default transition-all duration-500">
                {project.category} Projects
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-default">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-default"/>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-primary">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.Github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-default"/>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-primary">
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12" >
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute w-full top-0 bottom-0 bg-black/10"></div>
                  {/* Image */}
                  <div className="w-full h-full">
                    <Image src={project.image} fill className="object-cover" alt=""/>
                  </div>
                  </div>
                  
                   </SwiperSlide>
              })}
              {/* button  */}
              <WorkSlideBtns ContainerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none " btnStyle="bg-default hover:bg-default-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconStyle="" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
