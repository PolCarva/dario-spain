import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel3D from "./Carousel3D";
import WhatsappFixedIcon from "../components/WhatsappFixedIcon";
import loader from "../assets/img/loader.png";

const PhotoGrid = ({ images }) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const location = useLocation();
  const [category, setCategory] = useState("default");
  const [isLoading, setIsLoading] = useState(true);

  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const parametros = location.pathname.split("/");
    const ultimoParametro = parametros[parametros.length - 1];
    setCategory(ultimoParametro);
  }, [location.pathname]);

  useEffect(() => {
    // Cuando cambia la categoría, reinicializa el estado de las imágenes cargadas
    setLoadedImages({});
    setIsLoading(true);
  }, [category]);

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

  const handleImageLoaded = (key) => {
    setLoadedImages((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  useEffect(() => {
    // Check if all images have finished loading
    const allImagesLoaded = Object.keys(images).every(
      (key) => key.includes("Small") || loadedImages[key]
    );
    setIsLoading(!allImagesLoaded);
  }, [loadedImages, images]);

  return (
    <>
      <WhatsappFixedIcon />
      {isCarouselOpen && (
        <Carousel3D
          activeImage={activeImage}
          images={images}
          onClose={() => {
            setIsCarouselOpen(false);
          }}
        />
      )}

      <div className="grid grid-cols-6 gap-4">
        {isLoading && (
          <div className="col-span-6 w-full h-full flex items-center justify-center">
            <img
              src={loader}
              alt="Loading..."
              className="w-12 h-12 animate-spin"
            />
          </div>
        )}
        {Object.keys(images).map((key, index) => {
          // Verificar si la clave contiene "Small" y omitirla si es así
          if (key.includes("Small")) {
            return null; // Omitir la imagen "small"
          }

          const colSpan = layout[index];
          const isImageLoaded = loadedImages[key];
          const mainImage = images[key];
          const smallImage = images[key + "Small"]; // Obtener la ruta de la imagen small

          return (
            <img
              onLoad={() => handleImageLoaded(key)}
              onClick={() => handleImageClick(key)}
              key={key}
              loading="lazy"
              src={isImageLoaded ? mainImage : smallImage}
              alt={`foto ${category}: ${key}`}
              className={`${
                !isImageLoaded ? "blur-sm" : "blur-0"
              } w-full h-full !max-h-[80vh] object-cover cursor-pointer select-none hover:z-10 hover:scale-110 border-2 border-transparent hover:border-white transition-all duration-300`}
              style={{ gridColumn: `span ${colSpan}` }}
            />
          );
        })}
      </div>
    </>
  );
};

export default PhotoGrid;
