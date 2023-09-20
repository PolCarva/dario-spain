import React from "react";
import { imgDesfiles } from "../constants/images";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const textoPredefinido =
    "Hola Darío, me gustaría saber más sobre tus servicios";

  const abrirWhatsapp = () => {
    const numeroTelefono = "+549351573-9982";
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
      textoPredefinido
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hero" className="text-white overflow-hidden mx-auto w-full h-[60vh] md:h-[40vh]  lg:h-[80vh] flex flex-col py-5 lg:flex-row relative">
      <div className="flex gap-2 mx-auto p-normalize flex-col justify-center w-full h-full z-30 items-center md:items-start">
        <span className="text-xl font-body text-center md:text-start">
          Hola, soy
        </span>
        <div className="text-center md:text-start">
          <h1 className="font-logo font-black text-5xl md:text-6xl lg:text-7xl mb-2">
            DARIO SPAIN
          </h1>
          <p className="font-body italic my-2">
            Capturo experiencias visuales extraordinarias
          </p>
        </div>
        <button
          onClick={abrirWhatsapp}
          className="bg-primary hover:bg-primary-hover transition-colors duration-200 flex gap-2 items-center px-5 py-2 rounded-xl font-body text-md md:text-base"
        >
          <FaWhatsapp />
          Contactame
        </button>
      </div>

      <img
        src={imgDesfiles.desfile5}
        alt=""
        className="absolute w-[90%] h-full object-cover top-0 left-[25%]"
      />

      {/* Degradado superpuesto sobre la imagen */}
      <div className="bg-gradient-to-l from-transparent to-black absolute w-full h-full top-0 left-[25%]"></div>
    </section>
  );
};

export default Hero;
