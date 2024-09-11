import React from "react";
import WindowsCleaning from "../../assets/images/window-cleaning.png";
import CarpetShampoo from "../../assets/images/carpet-shampoo.png";
import FloorWaxing from "../../assets/images/floor-cleaner.png";
import FloorBuffing from "../../assets/images/floor-buffing.png";
import DeepCleaning from "../../assets/images/deep-cleaning.png";
import ApartmentsCleaning from "../../assets/images/apartments-cleaning.png";
import PowerWashing from "../../assets/images/power-washing.png";
import GeneralCleaning from "../../assets/images/general-cleaning.png";

//fondos para servicios

import WindowsCleaningbg from "../../assets/images/windowsbg.jpg";
import CarpetShampoobg from "../../assets/images/carpetbg.jpg";
import FloorWaxingbg from "../../assets/images/floorbg.webp";
import FloorBuffingbg from "../../assets/images/buffingbg.jpg";
import DeepCleaningbg from "../../assets/images/deepbg.jpg";
import ApartmentsCleaningbg from "../../assets/images/apartmentbg.jpg";
import PowerWashingbg from "../../assets/images/washingbg.jpg";
import GeneralCleaningbg from "../../assets/images/miss.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 400, // Duración de la animación
      easing: "ease-in-out", // Tipo de easing
      once: true, // Animar solo una vez
    });
  }, []);
  //array de servicios que se proporcionan
  const services = [
    {
      title: "Windows Cleaning",
      description:
        "We remove stains, dirt, and fingerprints from your windows to ensure a clear view and sparkling shine.",
      icon: WindowsCleaning,
      bgImage: WindowsCleaningbg,
    },
    {
      title: "Carpet Shampoo",
      description:
        "We use specialized cleaners and extraction machines to remove stains and odors, leaving your carpets clean and fresh.",
      icon: CarpetShampoo,
      bgImage: CarpetShampoobg,
    },
    {
      title: "Floor Waxing",
      description:
        "We apply a protective layer of wax to your floors to restore their shine and provide a barrier against wear and dirt.",
      icon: FloorWaxing,
      bgImage: FloorWaxingbg,
    },
    {
      title: "Floor Buffing",
      description:
        "We use specialized equipment to smooth and restore the shine of your floors, removing scratches and stains for a glossy finish.",
      icon: FloorBuffing,
      bgImage: FloorBuffingbg,
    },
    {
      title: "Deep Cleaning",
      description:
        "We perform a thorough cleaning of all areas, removing built-up dirt, bacteria, and germs for a truly clean environment.",
      icon: DeepCleaning,
      bgImage: DeepCleaningbg,
    },
    {
      title: "Apartments Vacancies Cleaning",
      description:
        "We prepare vacant apartments for new tenants, ensuring that every corner is spotless and ready for move-in.",
      icon: ApartmentsCleaning,
      bgImage: ApartmentsCleaningbg,
    },
    {
      title: "Power Washing",
      description:
        "We use a powerful high-pressure water machine to clean exterior surfaces, removing dirt, mold, and tough stains.",
      icon: PowerWashing,
      bgImage: PowerWashingbg,
    },
    {
      title: "General Cleaning",
      description:
        "We offer routine cleaning of your space, covering essential tasks like sweeping, mopping, and kitchen sanitization.",
      icon: GeneralCleaning,
      bgImage: GeneralCleaningbg,
    },
  ];
  return (
    <section id="services" className="container mx-auto px-4 py-16 xs:py-0">
      <div className="flex justify-center mb-16">
        <h2 className="text-2xl text-center bg-blue-500 w-36 font-bold rounded-full text-white p-2">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-shadow overflow-hidden h-80"
            data-aos="flip-left"
            data-aos-delay={index * 200}
          >
            <div className="relative">
              <img
                src={service.bgImage}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 opacity-50"></div>
              <div className="absolute inset-x-0 bottom-[-24px] flex justify-center">
                <div className="w-16 h-16 flex justify-center items-center bg-white shadow-sky-100 rounded-full shadow-lg">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
            <div className="pt-8 text-center">
              <h3 className="text-xl lg:text-lg font-bold mb-2 text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-700 lg:text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
