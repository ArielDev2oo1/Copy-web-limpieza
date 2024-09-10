import React from "react";
import AboutUsI from "../../assets/images/AboutUsImage.png";
import Floor from "../../assets/images/floor-cleaner.png";
import Counter from "../common/Counter";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center xs:flex-col-reverse"
    >
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center xs:mt-1">
        <img src={AboutUsI} alt="Cleaning Man" className="h-auto" />
      </div>
      <div className="md:w-1/2 ">
        <div className="space-y-4 xs:space-y-2">
          <div className="space-y-10 xs:space-y-5">
            <h2 className="text-2xl text-center bg-blue-500 w-36 font-bold rounded-full text-white p-2 xs:text-xl xs:w-32">
              About Us
            </h2>
            <h3 className="text-4xl font-semibold xs:text-2xl">
              Delivering exceptional care for your home and workplace.
            </h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            We are Maintenance and Cleaning, a cleaning company with an
            excellent team trained to provide the best service. Our clients
            trust in our work, opening the doors of their homes with peace of
            mind. We are proud to be part of their lives, always offering the
            best service.
          </p>
        </div>

        <div className="mt-10 xs:mt-3">
          <Counter />
        </div>
      </div>
    </section>
  );
}
