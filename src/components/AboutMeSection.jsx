import React from "react";
import { useTranslation } from "react-i18next";

export const AboutMeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="p-normalize pt-5" id="about">
      <div className="font-body flex flex-col gap-4 w-full md:w-2/3">
        <h2 className="text-4xl font-bold font-logo">{t("about-me.title")}</h2>
        <h4 className="font-semibold text-xl">{t("about-me.subtitle")}</h4>
        <p>{t("about-me.paragraph-1")}</p>
        <p>{t("about-me.paragraph-2")}</p>
        <p>{t("about-me.paragraph-3")}</p>
        <p>{t("about-me.paragraph-4")}</p>
      </div>
    </section>
  );
};
