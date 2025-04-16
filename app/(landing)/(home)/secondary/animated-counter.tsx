"use client";
import { useRef } from "react";

// import { ScrollTrigger } from "gsap/all";
import { counterItems } from "./constants";
import CountUp from "react-countup";
// gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              {/* 0 {item.suffix} */}
              <CountUp
                start={0}
                end={item.value}
                suffix={item.suffix}
                duration={2.5}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
