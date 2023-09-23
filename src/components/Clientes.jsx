import React from "react";
import ClientCard from "./ClientCard";
import { images } from "../constants/images";

const Clientes = () => {
  return (
    <section className="p-normalize mt-10 pb-10">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold text-center">
          Nuestros clientes destacados
        </h2>
        <ClientCard
          title={"Pandora Estudio"}
          desc={
            "Es una productora audiovisual, orientada a brindar servicios de Fotografía Profesional y pequeños videos, a Diseñadores y talentos emergentes del rubro  Moda. También se cubren eventos de arte y conciertos."
          }
          quote={
            "“Apoyamos el arte local con una visión divergente e inclusiva.”"
          }
          img={images.cliente1}
        />
        <ClientCard
          title={"Pandora Beauty"}
          by={"Pandora Beauty by Vanesa Araoz"}
          desc={
            "Servicios de Maquillaje profesional, Peluquería y Estilismo de Moda. Realización de producciones de moda."
          }
          img={images.cliente2}
        />
      </div>
    </section>
  );
};

export default Clientes;
