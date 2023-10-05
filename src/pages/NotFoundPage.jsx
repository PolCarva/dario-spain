import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import img404 from "../assets/img/img404.svg";
import img404_en from "../assets/img/img404_en.svg";
import img404sm from "../assets/img/img404small.svg";
import img404sm_en from "../assets/img/img404small_en.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(true);

  useEffect(() => {
    if (i18n.language === "es") {
      setIsSpanish(true);
    } else {
      setIsSpanish(false);
    }
    console.log("Current language:", i18n.language);
    console.log("isSpanish:", isSpanish);
  }, [i18n.language]);

  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none" />
      <section className="flex-1 flex flex-col p-normalize py-16 items-center justify-center bg-gradient-to-b to-primary from-white overflow-hidden">
        {/* Imagen para móviles */}
        <img
          src={isSpanish ? img404sm : img404sm_en}
          alt="404 not found"
          className="max-w-full select-none h-full object-contain block md:hidden"
        />
        {/* Imagen para tamaños mayores que móviles */}
        <img
          src={isSpanish ? img404 : img404_en}
          alt="404 not found"
          className="max-w-full select-none h-full object-contain hidden md:block"
        />
        <div className="w-full md:w-1/2 mx-auto flex justify-end mt-4">
          <Link
            to={"/"}
            className="font-body text-center shadow-xl transition-colors duration-300 border-2 border-black hover:bg-white hover:text-black py-2 md:py-4 lg:py-4 w-full md:w-1/2 text-xl rounded-lg bg-black text-white"
          >
            {t("navbar.home")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
