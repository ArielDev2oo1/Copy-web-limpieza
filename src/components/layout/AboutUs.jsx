import React from "react";
import MenCleaning from "../../assets/images/men-cleaning.png";
import Floor from "../../assets/images/floor-cleaner.png";

export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={MenCleaning} alt="Cleaning Man" className="h-auto" />
      </div>
      <div className="md:w-1/2 space-y-16">
        <div className="space-y-14">
          <div className="space-y-5">
            <h2 className="text-2xl text-center bg-blue-500 w-36 font-bold rounded-full text-white p-2">
              About Us
            </h2>
            <h3 className="text-4xl font-semibold">
              We are providing best maintenance and cleaning
            </h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            For more than 5 years, our clients have trusted our maintenance and
            cleaning services, opening the doors of their homes with peace of
            mind. We are proud to be part of their lives, offering an always
            reliable and professional service.
          </p>
        </div>
        <div className="flex justify-around">
        <div className="text-center">
          <img src={Floor} alt="Janitorial Cleaning" className="w-12 mb-2 mx-auto" />
          <p>Janitorial Cleaning</p>
        </div>
        <div className="text-center">
          <img src={Floor} alt="Residential and Commercial" className="w-12 mb-2 mx-auto" />
          <p>Residential and Commercial</p>
        </div>
      </div>
      </div>
    </section>
  );
}
