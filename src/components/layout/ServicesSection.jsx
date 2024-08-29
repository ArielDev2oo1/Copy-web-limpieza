import React from "react";
import WindowsCleaning from "../../assets/images/window-cleaning.png"
import CarpetShampoo from "../../assets/images/carpet-shampoo.png"
import FloorWaxing from "../../assets/images/floor-cleaner.png"
import FloorBuffing from "../../assets/images/floor-buffing.png"
import DeepCleaning from "../../assets/images/deep-cleaning.png"
import ApartmentsCleaning from "../../assets/images/apartments-cleaning.png"
import PowerWashing from "../../assets/images/power-washing.png"
import GeneralCleaning from "../../assets/images/general-cleaning.png"

export default function ServicesSection() {
  
  //array de servicios que se proporcionan
  const services = [
    {
      title: "Windows Cleaning",
      description:
        "We remove stains, dirt, and fingerprints from your windows to ensure a clear view and sparkling shine.",
      icon: WindowsCleaning,
    },
    {
      title: "Carpet Shampoo",
      description:
        "We use specialized cleaners and extraction machines to remove stains and odors, leaving your carpets clean and fresh.",
      icon: CarpetShampoo,
    },
    {
      title: "Floor Waxing",
      description:
        "We apply a protective layer of wax to your floors to restore their shine and provide a barrier against wear and dirt.",
      icon: FloorWaxing,
    },
    {
      title: "Floor Buffing",
      description:
        "We use specialized equipment to smooth and restore the shine of your floors, removing scratches and stains for a glossy finish.",
      icon: FloorBuffing,
    },
    {
      title: "Deep Cleaning",
      description:
        "We perform a thorough cleaning of all areas, removing built-up dirt, bacteria, and germs for a truly clean environment.",
      icon: DeepCleaning,
    },
    {
      title: "Apartments Vacancies Cleaning",
      description:
        "We prepare vacant apartments for new tenants, ensuring that every corner is spotless and ready for move-in.",
      icon: ApartmentsCleaning,
    },
    {
      title: "Power Washing",
      description:
        "We use a powerful high-pressure water machine to clean exterior surfaces, removing dirt, mold, and tough stains.",
      icon: PowerWashing,
    },
    {
      title: "General Cleaning",
      description:
        "We offer routine cleaning of your space, covering essential tasks like sweeping, mopping, and kitchen sanitization.",
      icon: GeneralCleaning,
    },
  ];
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-shadow">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 flex justify-center items-center bg-blue-200 rounded-full">
                <img src={service.icon} alt={service.title} className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
