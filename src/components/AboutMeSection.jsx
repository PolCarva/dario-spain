import React from "react";

export const AboutMeSection = () => {
  return (
    <section className="p-normalize pt-5" id="about">
      <div className="font-body flex flex-col gap-4 w-full md:w-2/3">
        <h2 className="text-4xl font-bold font-logo">Acerca de mí</h2>
        <h4 className="font-semibold text-xl">¿Cómo están? Les cuento un poco sobre quien soy</h4>
        <p>
          Durante 10 años, me desempeñé como locutor y periodista en Córdoba,
          Argentina. Durante ese tiempo, realicé trabajos como columnista
          deportivo y de espectáculos, móviles radiales, fui productor
          informativo y de contenido para varios medios radiofónicos, además fui
          creador y conductor de los programas radiales "Recta Final", "Córdoba
          Sport" y "Energía Deportiva."
        </p>

        <p>
          Durante ese proceso, y como una forma de aportar aún más a dicha
          profesión, comencé a incursionar en el mundo de la fotografía
          deportiva.
        </p>
        <p>
          Otra de mis grandes pasiones es la moda. Por eso, en paralelo, decidí
          formarme como asesor de imagen y personal shopper, con el propósito de
          fusionar la fotografía y la moda. Posteriormente, inicié mi trabajo en
          la productora de moda Pandora Estudio, donde actualmente me desarrollo
          como Productor Fotográfico.
        </p>
        <p>
          También realizo fotografías de conciertos, desfiles de moda, eventos,
          foto productos, fotoperiodismo y books personales.
        </p>
      </div>
    </section>
  );
};
