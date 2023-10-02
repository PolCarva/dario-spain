import React from "react";
import ClientCard from "./ClientCard";
import { images } from "../constants/images";

import { useTranslation } from "react-i18next";

const Clientes = () => {
  const { t } = useTranslation();
  return (
    <section className="p-normalize mt-10 pb-10">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold text-center  font-logo">
          {t("clients.title")}
        </h2>
        <ClientCard
          url={"https://pandoraestudio1.wixsite.com/pandoraestudio?fbclid=PAAaZ0iLdkS81N1bI77xp2enLFStEk3wh4Uh8KjYFE8uSUbb9KsSZEVuIHqH8"}
          title={t("clients.pandora-estudio.title")}
          desc={t("clients.pandora-estudio.desc")}
          quote={t("clients.pandora-estudio.quote")}
          img={images.cliente1}
        />
        <ClientCard
          url={"https://instagram.com/pandoraestudio.ok?igshid=NzZlODBkYWE4Ng=="}
          title={t("clients.pandora-beauty.title")}
          by={t("clients.pandora-beauty.by")}
          desc={t("clients.pandora-beauty.desc")}
          img={images.cliente2}
        />
      </div>
    </section>
  );
};

export default Clientes;
