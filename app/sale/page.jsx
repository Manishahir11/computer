"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { motherbordsArray, processors, GraphicsCard, Rams } from "../../Data/data.js"




const sale = () => {

  const [selectProcessor, setSelectProcessor] = useState()

  console.log(selectProcessor)

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
          defaultValue="processors"
          className="flex flex-col xl:flex-row justify-center gap-[60px]"

        >
          <Link href={"/cart"} selectProcessor={selectProcessor}>
            <h1 className="text-5xl">

              <FaCartPlus  />
            </h1>
          </Link>
          
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-1 gap-6">
            <TabsTrigger value="processors">processors</TabsTrigger>
            <TabsTrigger value="motherbord">MotherBord</TabsTrigger>
            <TabsTrigger value="graphicsCard">GraphicsCard</TabsTrigger>
            <TabsTrigger value="rams">RAMS</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* processors content*/}
            <TabsContent value="processors" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{processors.title}</h3>
                <div className="flex flex-col xl:flex-row  items-center justify-center  w-full" >
                  <p className="max-w-[50%] text-black/60 mx-auto xl:mx-0">
                    {processors.description}
                  </p>
                  <input className="border rounded-md mt-2" type="text" placeholder="Search" />
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {processors.Intelcpu.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#DAD2FF] h-[32px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                          onClick={() => {
                           console.log('clicked')

                          }}
                        >
                          <span className="text-primary">{item.name}</span>
                          {/* <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                               {item.degree}
                             </h3>
                             <div className="flex items-center gap-3">
                               <span className="h-[6px] w-[6px] rounded-full bg-default"></span>
                               <p className="text-primary">{item.institution}</p>
                             </div> */}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* motherbord content  */}
            <TabsContent value="motherbord" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{motherbordsArray.title}</h3>
                <div>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {motherbordsArray.description}
                  </p>
                  <input className="border rounded-md mt-2" type="text" placeholder="Search" />
                </div>

                <ScrollArea className="h-[630px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {motherbordsArray.gigabyte.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#DAD2FF] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <span className="text-primary">{item.Name}   Year:{item.Year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">

                            <p className="text-primary"><span className="h-[6px] w-[6px] rounded-full bg-default"></span>Socket: {item.Socket}</p>
                            <p className="text-primary">Chipset: {item.Chipset}</p>
                            <p className="text-primary">Formfactor: {item.Formfactor}</p>
                          </h3>
                          <div className="flex items-center gap-3">

                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* GraphicsCard content */}
            <TabsContent value="graphicsCard" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{GraphicsCard.title}</h3>
                <div>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {GraphicsCard.description}
                  </p>
                  <input className="border rounded-md mt-2" type="text" placeholder="Search" />
                </div>

                <ScrollArea className="h-[630px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {GraphicsCard.graphics.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#DAD2FF] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <span className="text-primary">{item.Name}   Year:{item.Year}</span>

                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Ram content */}
            <TabsContent value="rams" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Rams.title}</h3>
                <div>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {Rams.description}
                  </p>
                  <input className="border rounded-md mt-2" type="text" placeholder="Search" />
                </div>

                <ScrollArea className="h-[630px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                    {Rams.ram.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#DAD2FF] min-h-[240px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:justify-start gap-1"
                        >
                          <div className="w-full flex justify-between items-center mb-3">
                            <h4><span className="text-black">no. </span>{item.id}</h4>
                            <h3><span className="text-black">Price: </span>{item.Price}</h3>

                          </div>
                          <span className="text-primary text-xl">{item.Name}   </span>
                          <p className="text-center">{item.desc}</p>

                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>
    </motion.div>


  );
};

export default sale;
