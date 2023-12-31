import React from "react";
import { images } from "../constants/images";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const textoPredefinido = t("contact-buttons.whatsapp-msg");

  const abrirWhatsapp = () => {
    const numeroTelefono = "+549351573-9982";
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
      textoPredefinido
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="hero"
      className="text-white overflow-hidden mx-auto w-full h-[60vh] md:h-[40vh]  lg:h-[80vh] flex flex-col py-5 lg:flex-row relative"
    >
      <div className="flex gap-2 mx-auto p-normalize flex-col justify-center w-full h-full z-30 items-center md:items-start">
        <span className="text-xl font-body text-center md:text-start">
          {t("hero.hello")}
        </span>
        <div className="text-center md:text-start">
          <h1 className="font-logo font-black text-5xl md:text-6xl lg:text-7xl mb-2">
            DARIO SPAIN
          </h1>
          <p className="font-body italic my-2">
            {t("hero.span")}
          </p>
        </div>
        <button
          onClick={abrirWhatsapp}
          className="bg-primary hover:bg-primary-hover transition-colors duration-200 flex gap-2 items-center px-5 py-2 rounded-xl font-body text-md md:text-base"
        >
          <FaWhatsapp />
          {t("hero.contact-me")}
        </button>
      </div>

      <img
        src={images.darioImg}
        alt="Darío Spain"
        className="absolute w-[90%] h-full object-cover top-0 left-[25%]"
      />

      {/* Degradado superpuesto sobre la imagen */}
      <div className="bg-gradient-to-l from-transparent to-black absolute w-full h-full top-0 left-[25%]"></div>
    </section>
  );
};

export default Hero;
