import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LOGO.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para que al hacer scroll cambie de color la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para que al hacer click en el botón tenga un efecto de scroll
  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para alternar el menú en pantallas móviles
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-10 xs:h-12 xs:z-50 md:h-16 md:p-2 ${
        isScrolled ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white shadow-sm "
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between ">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-16 xs:h-12" />
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            <button
              onClick={(e) => handleScroll(e, "home")}
              className={`hover:text-blue-800 hover: ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              Home
            </button>
            <button
              onClick={(e) => handleScroll(e, "about")}
              className={`hover:text-blue-800 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              About Us
            </button>
            <button
              onClick={(e) => handleScroll(e, "services")}
              className={`hover:text-blue-800 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              Services
            </button>
            <button
              onClick={(e) => handleScroll(e, "gallery")}
              className={`hover:text-blue-800 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              Pictures
            </button>
            <button
              onClick={(e) => handleScroll(e, "contact")}
              className="px-4 py-2 bg-blue-800 text-white rounded-lg"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm ${
              isScrolled ? "text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 " : "bg-transparent text-white shadow-sm "
            }`}
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-50 dark:bg-blue-500 p-4">
            <nav className="space-y-2">
              <button
                onClick={(e) => {
                  handleScroll(e, "home");
                  toggleMenu();
                }}
                className="block w-full text-center py-2 text-gray-900 dark:text-white"
              >
                Home
              </button>
              <button
                onClick={(e) => {
                  handleScroll(e, "about");
                  toggleMenu();
                }}
                className="block w-full text-center py-2 text-gray-900  dark:text-white"
              >
                About Us
              </button>
              <button
                onClick={(e) => {
                  handleScroll(e, "services");
                  toggleMenu();
                }}
                className="block w-full text-center py-2 text-gray-900  dark:text-white"
              >
                Services
              </button>
              <button
                onClick={(e) => {
                  handleScroll(e, "gallery");
                  toggleMenu();
                }}
                className="block w-full text-center py-2 text-gray-900  dark:text-white"
              >
                Pictures
              </button>
              <button
                onClick={(e) => {
                  handleScroll(e, "contact");
                  toggleMenu();
                }}
                className="block w-full text-center py-2 text-white bg-blue-800 rounded-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
