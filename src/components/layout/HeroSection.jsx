import React from "react";
import HeroPicture from "../../assets/images/heropicture.jpg";
import BackgroundHero from "../../assets/images/backgroundHero.png";
import LadyCleaning from "../../assets/images/heroImage.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen  flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${BackgroundHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative container mx-auto px-4 flex flex-col justify-center h-full">
        <div className="text-left max-w-lg mx-24">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            <span className="text-blue-500">Professional </span>
            Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We offer comprehensive and up-to-date cleaning services, guided by
            our values of reliability, kindness and honesty. We strive to exceed
            expectations with a professional and approachable approach.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Contact us
            </button>
            <button className="bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">
              Learn about us
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0" style={{maskImage: "linear-gradient(black 80%, transparent)"}}>
          <img src={LadyCleaning} alt="Cleaning Lady" className="h-screen " style={{maskImage: "linear-gradient(black 95%, transparent)"}}/>
        </div>
      </div>
    </section>
  );
}
