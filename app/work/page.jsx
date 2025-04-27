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
    category: "HOSPITAL STAFF",
    title: "HOSPITAL STAFF",
    description:
      "BAPA SITARAM HOSPITAL (TALALA)",
  
    image: "/staff.jpeg",
    
  },
  {
    num: "02",
    category: "Covid Duty",
    title: "Covid Duty",
    description:
      "JAMNAGAR MUNICIPAL CORPORATION",
  
    image: "/covid.webp",
   
  },
  {
    num: "03",
    category: "Clinic all work",
    title: "Clinic Work",
    description:
      "Shiv clinic (talala)",
    image: "/clinic.jpg",
  }
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
              <div className="text-8xl leading-none font-extrabold text-black text-outline">
                {project.num}
              </div>
              {/* project category  */}
              <h2 className="text-[42px] font-bold leading-none text-primary group-hover:text-default transition-all duration-500">
                {project.category}
              </h2>
              {/* project description  */}
              <p className="text-black/60">{project.description}</p>
              {/* stack */}
              {/* <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-default">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul> */}
              <div className="border border-white/20"></div>
              
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
