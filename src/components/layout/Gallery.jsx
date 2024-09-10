import React, { useState } from "react";
import PropTypes from "prop-types";

//PISOS
import PisosAntes1 from "../../assets/images/Galeria/piso-antes1.webp";
import PisosDespues1 from "../../assets/images/Galeria/piso-despues1.webp";

const images = [
  {
    id: 1,
    category: "Limpieza",
    before: PisosAntes1,
    after: PisosDespues1,
  },
  {
    id: 2,
    category: "Muebles",
    before: PisosAntes1,
    after: PisosDespues1,
  },
  {
    id: 3,
    category: "Limpieza",
    before: PisosAntes1,
    after: PisosDespues1,
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const [selectedImage, setSelectedImage] = useState(null); // Nuevo estado para la imagen seleccionada

  const filteredImages =
    selectedCategory === "Todo"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <section id="gallery" className="container mx-auto p-4">
      <div className="flex justify-center mb-5 ">
        <h2 className="text-2xl text-center bg-blue-500 w-36 font-bold rounded-full text-white p-2">
          Gallery
        </h2>
      </div>
      <div className="filters flex justify-center mb-4">
        <button
          onClick={() => setSelectedCategory("Todo")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "Todo"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Todo
        </button>
        <button
          onClick={() => setSelectedCategory("Limpieza")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "Limpieza"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Opcion 1
        </button>
        <button
          onClick={() => setSelectedCategory("Muebles")}
          className={`mx-2 py-2 px-4 rounded ${
            selectedCategory === "Muebles"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Opcion 2
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
    <div className="card bg-white shadow-lg rounded overflow-hidden shadow-blue-200 mdm:w-auto mdm:flex mdm:flex-col mdm:items-center mdm:justify-center">
      <img
        src={showAfter ? image.after : image.before}
        alt={showAfter ? "Después" : "Antes"}
        className="w-80 h-80 cursor-pointer mdm:shadow-md mdm:shadow-blue-200 "
        onClick={() => setSelectedImage(showAfter ? image.after : image.before)} // Al hacer clic, se abre el modal
      />
      <div className="card-footer p-4 flex justify-center bg-gray-50 mdm:w-full">
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="w-32 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 hover:bg-gradient-to-br font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {showAfter ? "Ver Antes" : "Ver Después"}
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

