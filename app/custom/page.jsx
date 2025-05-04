"use client";


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { useState } from "react";

const custom = () => {
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
        <img src="/computer.png" alt="" />
      </div>
      <div className="container mx-auto">
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
        <div className="flex items-center justify-between">
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
        <form
          
          className="mt-5  grid grid-cols-1 justify-around xl:grid-cols-2"
        >
         
        </form>
      </div>
    </motion.div>
  );
};

export default custom;
