import React, { useEffect } from "react";
import HeroPicture from "../../assets/images/heropicture.jpg";
import BackgroundHero from "../../assets/images/backgroundHero1.png";
import LadyCleaning from "../../assets/images/heroImage.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Elemento de contacto no encontrado");
    }
  };


  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center text-white md:p-2
      "
      style={{
        backgroundImage: `url(${BackgroundHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-25"></div>
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 justify-center h-full xs:flex xs:flex-col-reverse xs:px-0">
        <div
          className="text-left max-w-lg mx-24 flex flex-col justify-center xs:justify-start xs:mx-5 xs:text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-50 xs:text-4xl ">
            <span className="text-blue-800 ">Professional </span>
            <div>
              <p>Cleaning Services</p>
            </div>
          </h1>
          <p className="mt-4 text-lg text-gray-100 ">
            We offer comprehensive and up-to-date cleaning services, guided by
            our values of reliability, kindness and honesty. We strive to exceed
            expectations with a professional and approachable approach.
          </p>
          <div className="md:mt-8 md:space-x-8 xs:flex xs:flex-col xs:gap-10 xs:space-x-0 xs:mt-6">
            <button
              onClick={scrollToContact}
              className=" md:w-32 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 xs:w-full"
            >
              Contact us
            </button>
          </div>
        </div>

        <div
          className="lg:absolute right-0 bottom-0 xs:relative xs:mt-8 xs:flex xs:items-center xs:justify-center md:relative md:mt-8 md:flex md:items-center md:justify-center"
          style={{ maskImage: "linear-gradient(black 80%, transparent)" }}
        >
          <img
            src={LadyCleaning}
            alt="Cleaning Lady"
            className="lg:w-auto lg:h-screen xs:w-72 xs:h-72 mdm:w-96 mdm:h-96 md:w-au"
            data-aos="fade-left"
            style={{ maskImage: "linear-gradient(black 95%, transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
