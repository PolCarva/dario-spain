import React from "react";
import Header from "../components/Header";
import img404 from "../assets/img/img404.svg";
import img404sm from "../assets/img/img404small.svg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-none" />
      <section className="flex-1 flex flex-col p-normalize py-16 items-center justify-center bg-gradient-to-b to-primary from-white overflow-hidden">
        {/* Imagen para móviles */}
        <img
          src={img404sm}
          alt="404 not found"
          className="max-w-full select-none h-full object-contain block md:hidden"
        />
        {/* Imagen para tamaños mayores que móviles */}
        <img
          src={img404}
          alt="404 not found"
          className="max-w-full select-none h-full object-contain hidden md:block"
        />
        <div className="w-full md:w-1/2 mx-auto flex justify-end mt-4">
          <Link to={"/"} className="font-body text-center shadow-xl transition-colors duration-300 border-2 border-black hover:bg-white hover:text-black py-2 md:py-4 lg:py-4 w-full md:w-1/2 text-xl rounded-lg bg-black text-white">
            Inicio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
