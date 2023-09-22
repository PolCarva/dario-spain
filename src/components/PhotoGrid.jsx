import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const categoryGridStyles = {
  books: "repeat(2, 1fr)",
  clientes: "repeat(3, 1fr)",
  conciertos: "repeat(2, 1fr)",
  desfiles: "repeat(3, 1fr)",
  eventos: "repeat(3, 1fr)",
  fotoperiodismo: "repeat(3, 1fr)",
  moda: "repeat(3, 1fr)",
  default: "repeat(3, 1fr)",
};

const PhotoGrid = ({ images }) => {
  const location = useLocation();
  const [category, setCategory] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
    const parametros = location.pathname.split("/");
    const ultimoParametro = parametros[parametros.length - 1];
    setCategory(ultimoParametro);
  }, [location.pathname]);

  const gridStyle = {
    gridTemplateColumns: categoryGridStyles[category] || categoryGridStyles.default,
  };

  return (
    <div className="grid grid-cols-6 gap-4 grid-rows-6" style={gridStyle}>
      {Object.keys(images).map((key) => (
        <img
          key={key}
          src={images[key]}
          alt={`Book ${key}`}
          className="w-full h-full max-h-[550px] object-cover"
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
