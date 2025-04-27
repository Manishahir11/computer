"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 16,
    text: "Project completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 80,
    text: "Code commit",
  },
];
const Stats = () => {
  return (
    <section>
      {/* <div className="container mx-auto p-5">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((items, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-2 xl:gap-6 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={items.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />

                <p
                  className={`${
                    items.text.length < 25 ? "max-w-[100px]" : "max-w-[150px]"
                  } "leading-snug text-white/80"` }
                >
                  {items.text}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
};

export default Stats;
