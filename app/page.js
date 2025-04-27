"use client"

import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="pt-8 pb-12  xl:pt-0 xl:pb-0">
      <div className="container  mx-auto">
        <div className="flex pt-0 xl:pt-36 xl:flex-row flex-col-reverse items-center justify-between xl:pt- xl:pb-24">
          {/* into */}
          <div className="text-center xl:text-left">
            <span className="text-xl xl:text-2xl"></span>
            <h1 className="h1">
              Hello I`m <br />{" "}
              <span className="text-default">Karan Danger</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/60 text-2xl">
              i`m a Multipurpose Health worker with extensive experience for over 1 years.
              Looking for a role that aligns with my skills and interests.
            </p>
            {/* button Socials media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" >
                <span className="font-semibold text-xl ">Download CV</span>
                <FiDownload />
              </Button>
              
              
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border-default rounded-full flex justify-center items-center text-default font-base border hover:bg-default hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        {/* <Stats/> */}
      </div>
    </section>
  );
}
