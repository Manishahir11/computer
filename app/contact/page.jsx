"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "+91 9909812390",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dangarkaran70@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Devbhoomi Dwarka, Gujrat, India 361315",
  },
];
const about = {
  title: "About Me",
  description:
    "Looking for a challenging role so that I can use my skills and capabilities through sincere dedication and hard work for successful career.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "jignesh Danger",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7990936307",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "jignesh ahir",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "dangarjignesh@gmail.com",
    },
    {
      fieldName: "Address",
      fieldValue: "106, Silver Mount Complex,Opp SBI Bank, Pedak Rode Rajkot-360003",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati ",
    },
  ],
};


const Contact = () => {
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            {/* form  */}
            <form className="flex flex-col gap-6 p-10 w-auto xl:w-full bg-[#DAD2FF] rounded-xl">
              <h3 className="text-4xl text-default">Let's work together</h3>

              {/* input */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                <Input type="firstName" placeholder="First Name" />
                <Input type="lastName" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/* select  */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='est'>Software </SelectItem>
                    <SelectItem value='cst'>Hardwere</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea className="h-[200px]" placeholder='Type Your Message here.' />
              {/* send button */}
              <Button size='md' className='max-w-40 py-2'>Send Message</Button>
            </form>
          </div>
          {/* info  */}
          <div className="flex flex-col items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">

            <h3 className="text-4xl font-bold">{about.title}</h3>
            
              <p className="max-w-[50%] text-black/60 mx-auto xl:mx-0">
                {about.description}
              </p>
            


            <ul className="flex flex-col gap-10">
              {about.info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                
                  <div className="flex-1">
                    <h3 className="text-xl">{item.fieldName}</h3>
                    <p className="black-white/60">{item.fieldValue}</p>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
