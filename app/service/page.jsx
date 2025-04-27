"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Healthcare Solutions",
    description:
      "Sites makes collaborating easy with real-time co-editing and the same powerful sharing controls that you're used to in Drive and Docs. Just like in Docs, you can work together and see each I  will build website, full stack developer, front end developer",
    href: "",
  },
  {
    num: "02",
    title: "Clinic all work",
    description:
      "creating user-friendly and engaging digital products by understanding user needs, designing user flows, crafting wire-frames and prototypes, and ensuring intuitive interfaces through usability testing and iterative design improvements. ",
    href: "",
  },
  {
    num: "03",
    title: "Computer work",
    description:
      "I create professional, minimalist, and modern logos that reflect your brand's identity. My designs are clean, bold, and effective at any size. Minimalist, luxury, custom, modern, unique, beauty, fashion, real estate",
    href: "",
  },
  {
    num: "04",
    title: "Hospital Staff Services",
    description:
      "Competitive, Creative and Dynamic Individual known for consistently exceeding expectations. Worked on several projects with total dedication and getting the desired goals for the client.",
    href: "",
  },
  
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]  h-full"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className=" p-3 rounded-md flex-1 flex flex-col justify-center gap-6 group  bg-[#f5e1e1]"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold  text-outline text-transparent group-hover:text-default transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full   text-center group-hover:bg-default transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-white text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px]  font-bold leading-none group-hover:text-default">{service.title}</h2>
                {/* description  */}
                <p className="text-black/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
