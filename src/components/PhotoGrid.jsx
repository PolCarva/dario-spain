import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel3D from "./Carousel3D";
import WhatsappFixedIcon from "../components/WhatsappFixedIcon";


const PhotoGrid = ({ images }) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const location = useLocation();
  const [category, setCategory] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
    const parametros = location.pathname.split("/");
    const ultimoParametro = parametros[parametros.length - 1];
    setCategory(ultimoParametro);
  }, [location.pathname]);

  const LAYOUTS = {
    default: [2, 2, 2, 3, 3, 2, 2, 2, 3, 3],
    desfiles: [2, 2, 2, 3, 3, 2, 2, 2, 3, 3],
    moda: [2, 2, 2, 3, 3, 2, 2, 2, 4, 2],
    fotoperiodismo: [2, 2, 2, 3, 3, 6],
    eventos: [3, 3, 3, 3, 3, 3, 6],
    conciertos: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    books: [2, 2, 2, 3, 3, 2, 2, 2, 3, 3, 4, 2],
  };

  const layout = LAYOUTS[category] || LAYOUTS.default;

  const handleImageClick = (key) => {
    setActiveImage(key);
    setIsCarouselOpen(true);
  };

  return (
    <>
    <WhatsappFixedIcon/>
      {isCarouselOpen && (
        <Carousel3D activeImage={activeImage} images={images} onClose={() => {setIsCarouselOpen(false)}}/>
      )}
      <div className="grid grid-cols-6 gap-4">
        {Object.keys(images).map((key, index) => {
          const colSpan = layout[index];
          return (
            <img
              loading="lazy"
              onClick={() => handleImageClick(key)}
              key={key}
              src={images[key]}
              alt={`foto ${category}: ${key}`}
              className={`w-full h-full !max-h-[80vh] object-cover cursor-pointer select-none hover:scale-110 border-2 border-transparent hover:border-white transition-all duration-300`}
              style={{ gridColumn: `span ${colSpan}` }}
            />
          );
        })}
      </div>
    </>
  );
};

export default PhotoGrid;

/* const categoryGridStyles = {
  books: ["repeat(3, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(2, 1fr)"],
  clientes: "repeat(3, 1fr)",
  conciertos: "repeat(2, 1fr)",
  desfiles: "repeat(3, 1fr)",
  eventos: "repeat(3, 1fr)",
  fotoperiodismo: "repeat(3, 1fr)",
  moda: "repeat(3, 1fr)",
  default: "repeat(3, 1fr)",
}; */
