import React, { useEffect } from "react";
import Prueba from "../../assets/images/men-cleaning.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Address from "../../assets/images/mapa.png";
import Phone from "../../assets/images/llamar.png";
import Fax from "../../assets/images/fax.png";
import Email from "../../assets/images/email.png";

export default function Contact() {
  const contact = [
    {
      title: "Address",
      description: "514 S. Gramercy PL. #14 Los Angeles, CA 90020",
      icon: Address,
    },
    {
      title: "Phone Number",
      description: "+1(213)909-1735",
      icon: Phone,
    },
    {
      title: "Fax",
      description: "+1(213)480-4887",
      icon: Fax,
    },
    {
      title: "E-mail",
      description: "cr7776279@gmail.com",
      icon: Email,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="contact" className="container mx-auto p-6 mt-8 xs:mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-8 xs:space-y-3">
          <h2 className="text-2xl text-center bg-blue-500 w-36 font-bold rounded-full text-white p-2 xs:text-xl xs:w-32">
            Contact us
          </h2>
          <h3 className="text-4xl font-semibold mb-4 xs:text-2xl">
            Fell Free to Contact With Us
          </h3>
          <p className="mb-4">
            We are here to help you with any questions or concerns you may have.
            If you are looking for more information about our services or need
            assistance, please do not hesitate to reach out to us. Our team is
            ready to assist you and ensure you receive the best experience
            possible.
          </p>

          {/* Este es el div que muestra las card de la información de contacto */}
          <div className="text-center mt-14 mb-14 grid grid-cols-1 gap-4 p-5 place-items-center xs:py-4 xs:px-0 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            {contact.map((contacts, index) => (
              <article
                key={index}
                className="bg-neutral-100 p-6 rounded-xl shadow-xl shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 transition-shadow flex h-28 xl:w-80 mdm:justify-center mdm:items-center lg:w-64"
                data-aos="zoom-in-down"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center xs:grid-cols-5  ">
                  <div className="col-span-1 flex justify-center sm:justify-start">
                    <img className="w-10" src={contacts.icon} alt="" />
                  </div>
                  <div className="col-span-4 flex flex-col justify-center items-center">
                    <p className="text-lg font-semibold">{contacts.title}</p>
                    <p className="text-gray-600 text-sm">
                      {contacts.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* div para mostrar el formulario */}
        <div
          className="m-5 p-6 flex justify-center items-center xs:p-0 xs:m-1"
          data-aos="fade-left xs:zoom-in"
        >
          <form className="flex flex-col justify-center items-center w-full space-y-4 xs:w-full">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-2 border border-blue-400 h-14 rounded-xl xs:w-full"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-2 border border-blue-400 h-14 rounded-xl"
            />
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 border border-blue-400 h-64 rounded-xl resize-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
