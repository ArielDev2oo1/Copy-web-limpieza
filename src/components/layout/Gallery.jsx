import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

import AOS from "aos";
import "aos/dist/aos.css";

//PISOS
import PisosAntes1 from "../../assets/images/Galeria/piso-antes1.webp";
import PisosDespues1 from "../../assets/images/Galeria/piso-despues1.webp";
import PisosAntes2 from "../../assets/images/Galeria/piso-antes2.webp";
import PisosDespues2 from "../../assets/images/Galeria/piso-despues2.webp";
import PisosAntes3 from "../../assets/images/Galeria/piso-antes3.webp";
import PisosDespues3 from "../../assets/images/Galeria/piso-despues3.webp";
import PisosAntes4 from "../../assets/images/Galeria/piso-antes4.webp";
import PisosDespues4 from "../../assets/images/Galeria/piso-despues4.webp";

//VENTANAS
import VentanasAntes1 from "../../assets/images/Galeria/ventanas1.jpg";
import VentanasDespues1 from "../../assets/images/Galeria/ventanas1.jpg";
import VentanasAntes2 from "../../assets/images/Galeria/ventanas2.jpg";
import VentanasDespues2 from "../../assets/images/Galeria/ventanas2.jpg";
import VentanasAntes3 from "../../assets/images/Galeria/ventanas3.jpg";
import VentanasDespues3 from "../../assets/images/Galeria/ventanas3.jpg";
import VentanasAntes4 from "../../assets/images/Galeria/ventanas4.jpg";
import VentanasDespues4 from "../../assets/images/Galeria/ventanas4.jpg";

//GENERAL
import GeneralAntes1 from "../../assets/images/Galeria/general-antes1.webp";
import GeneralDespues1 from "../../assets/images/Galeria/general-despues1.webp";
import GeneralAntes2 from "../../assets/images/Galeria/general-antes2.webp";
import GeneralDespues2 from "../../assets/images/Galeria/general-despues2.webp";
import GeneralAntes3 from "../../assets/images/Galeria/general-antes3.webp";
import GeneralDespues3 from "../../assets/images/Galeria/general-despues3.webp";
import GeneralAntes4 from "../../assets/images/Galeria/general-antes4.webp";
import GeneralDespues4 from "../../assets/images/Galeria/general-despues4.webp";

const images = [
  {
    id: 1,
    category: "floor",
    before: PisosAntes1,
    after: PisosDespues1,
  },
  {
    id: 2,
    category: "floor",
    before: PisosAntes2,
    after: PisosDespues2,
  },
  {
    id: 3,
    category: "floor",
    before: PisosAntes3,
    after: PisosDespues3,
  },
  {
    id: 4,
    category: "floor",
    before: PisosAntes4,
    after: PisosDespues4,
  },
  {
    id: 5,
    category: "windows",
    before: VentanasAntes1,
    after: VentanasDespues1,
  },
  {
    id: 6,
    category: "windows",
    before: VentanasAntes2,
    after: VentanasDespues2,
  },
  {
    id: 7,
    category: "windows",
    before: VentanasAntes3,
    after: VentanasDespues3,
  },
  {
    id: 8,
    category: "windows",
    before: VentanasAntes4,
    after: VentanasDespues4,
  },
  {
    id: 9,
    category: "General",
    before: GeneralAntes1,
    after: GeneralDespues1,
  },
  {
    id: 10,
    category: "General",
    before: GeneralAntes2,
    after: GeneralDespues2,
  },
  {
    id: 11,
    category: "General",
    before: GeneralAntes3,
    after: GeneralDespues3,
  },
  {
    id: 12,
    category: "General",
    before: GeneralAntes4,
    after: GeneralDespues4,
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // Nuevo estado para la imagen seleccionada

  useEffect(() => {
    AOS.init({
      duration: 400, // Duración de la animación
      easing: "ease-in-out", // Tipo de easing
      once: true, // Animar solo una vez
    });
  }, []);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <section id="gallery" className="container mx-auto p-4 mt-5">
      <div className="flex justify-center mb-5 ">
        <h2 className="text-2xl text-center bg-blue-500 w-36 font-bold rounded-full text-white p-2">
          Gallery
        </h2>
      </div>
      <div className="filters flex justify-center mb-4">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("floor")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "floor"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Floor
        </button>
        <button
          onClick={() => setSelectedCategory("windows")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "windows"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Windows
        </button>
        <button
          onClick={() => setSelectedCategory("General")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "General"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          General
        </button>
      </div>
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>

      {/* Modal para mostrar la imagen en tamaño completo */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Imagen en tamaño completo"
              className="max-w-full max-h-screen"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="w-8 h-8 rounded-xl absolute top-2 right-2 text-white bg-red-600 p-2 flex items-center justify-center"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const ImageCard = ({ image, setSelectedImage }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="card bg-white shadow-lg rounded overflow-hidden shadow-blue-200 mdm:w-auto mdm:flex mdm:flex-col mdm:items-center mdm:justify-center"
    data-aos="zoom-in"
    data-aos-delay={200}
    >
      <img
        src={showAfter ? image.after : image.before}
        alt={showAfter ? "After" : "Before"}
        className="w-80 h-80 cursor-pointer mdm:shadow-md mdm:shadow-blue-200 "
        onClick={() => setSelectedImage(showAfter ? image.after : image.before)} // Al hacer clic, se abre el modal
      />
      <div className="card-footer p-4 flex justify-center bg-gray-50 mdm:w-full">
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="w-32 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 hover:bg-gradient-to-br font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {showAfter ? "Before" : "After"}
        </button>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    before: PropTypes.string.isRequired,
    after: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedImage: PropTypes.func.isRequired, // Nueva prop para seleccionar la imagen
};
