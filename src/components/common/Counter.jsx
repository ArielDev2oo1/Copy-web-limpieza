import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 py-10 sm:flex sm:flex-col lg:grid lg:grid-cols-3 lg:gap-6 justify-around items-center">
      <div className="bg-white text-blue-500 rounded-lg shadow-md shadow-sky-200 p-6 flex flex-col items-center xs:w-full">
        <div className="text-6xl font-extrabold xs:text-7xl">
          <span>+</span>
          {inView && <CountUp start={0} end={5} duration={2} />}
        </div>
        <h3 className="text-xl font-medium mt-2 text-blue-700 xs:text-sm">Years of Experience</h3>
      </div>
      <div className="bg-white text-blue-500 rounded-lg shadow-md shadow-sky-200 p-6 flex flex-col items-center xs:w-full">
        <div className="text-6xl font-extrabold xs:text-7xl">
          {" "}
          <span>+</span>
          {inView && <CountUp start={0} end={75} duration={3} />}
        </div>
        <h3 className="text-xl font-medium mt-2 text-blue-700 xs:text-sm">Projects Completed</h3>
      </div>
      <div className="bg-white text-blue-500 rounded-lg shadow-md shadow-sky-200 p-6 flex flex-col items-center xs:w-full">
        <div className="text-6xl font-extrabold xs:text-7xl">
          <span>+</span>
          {inView && <CountUp start={0} end={100} duration={2.5} />}
        </div>
        <h3 className="text-xl font-medium mt-2 text-blue-700 xs:text-sm">Satisfied Clients</h3>
      </div>
    </div>
  );
}
