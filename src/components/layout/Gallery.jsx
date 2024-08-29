import React, { useState } from "react";
import PropTypes from "prop-types";
import Prueba1 from "../../assets/images/floor-cleaner.png";
import Prueba2 from "../../assets/images/window-cleaning.png";

const images = [
  {
    id: 1,
    category: "Limpieza",
    before: Prueba1,
    after: Prueba2,
  },
  {
    id: 2,
    category: "Muebles",
    before: Prueba1,
    after: Prueba2,
  },
  {
    id: 3,
    category: "Limpieza",
    before: Prueba1,
    after: Prueba2,
  },

];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  const filteredImages =
    selectedCategory === "Todo"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      
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
      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {filteredImages.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

const ImageCard = ({ image }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="card bg-white shadow-lg rounded overflow-hidden">
      <img
        src={showAfter ? image.after : image.before}
        alt={showAfter ? "Después" : "Antes"}
      />
      <div className="card-footer p-4 flex justify-center">
        <button onClick={() => setShowAfter(!showAfter)}>
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
};
