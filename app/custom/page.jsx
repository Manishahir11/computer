"use client";


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Form from "@/components/Form";

import { useState } from "react";

const custom = () => {
  const [show, setShow] = useState([]);

  console.log("show",show)
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
      className="min-h-[80vh] w-full  flex flex-col xl:flex-row items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="h-[500px] w-[500px]">

        <img src={show} alt=""  className="bg-cover "/>
        </div>
      </div>
      <div className="container mx-auto h-full overflow-auto">
        <h1 className="text-4xl">Custom Pc </h1>
        <p>
          Build your dream custom PC with our intuitive online tool! Choose
          high-performance components from NVIDIA, AMD, Intel, and more.
          Customize for gaming, creativity, or tech passion. Design your
          ultimate PC today!
        </p>
        <h3 className="text-3xl text-black">00.0</h3>
        <h3 className="text-black/40">including GST</h3>
        <div className="w-full h-1 bg-Primary"></div>
        <div className="flex flex-col items-start xl:flex-row xl:items-center justify-between">
          <div className="flex items-center justify-around">
            <h3 className="text-3xl text-black">Availability:</h3>
            <h3 className="text-black/40 text-2xl">In Stock</h3>
          </div>
          <div className="flex items-center justify-around my-4">
            <h3 className="text-3xl text-black">SKU:</h3>
            <h3 className="text-black/40 text-2xl">CUSTOM PC</h3>
          </div>
        </div>
        <div className="w-full h-1 bg-Primary"></div>
        <Form  setShow={setShow} show={show} />
      </div>
    </motion.div>
  );
};

export default custom;
