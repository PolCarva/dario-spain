import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { images } from "../constants/images";
import { useMediaQuery } from "react-responsive";

export const AboutMeSection = () => {
  const { t } = useTranslation();
  const [moreInfo, setMoreInfo] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const toggleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };

  return (
    <section className="p-normalize pt-5 flex gap-5" id="about">
      <div className="font-body flex gap-5 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold font-logo">
            {t("about-me.title")}
          </h2>
          <h4 className="font-semibold text-xl">{t("about-me.subtitle")}</h4>
          <p>{t("about-me.paragraph-1")}</p>
          {!isMobile && (
            <>
              <p>{t("about-me.paragraph-2")}</p>
              <p>{t("about-me.paragraph-3")}</p>
              <p>{t("about-me.paragraph-4")}</p>
            </>
          )}
          {isMobile && !moreInfo && (
            <span
              onClick={toggleMoreInfo}
              className="font-bold cursor-pointer underline w-max hover:text-primary-hover text-primary"
            >
              {t("about-me.more")}
            </span>
          )}
          {isMobile && moreInfo && (
            <>
              <p>{t("about-me.paragraph-2")}</p>
              <p>{t("about-me.paragraph-3")}</p>
              <p>{t("about-me.paragraph-4")}</p>
              <span
                onClick={toggleMoreInfo}
                className="font-bold cursor-pointer underline w-max hover:text-primary-hover text-primary"
              >
                {t("about-me.less")}
              </span>
            </>
          )}
        </div>
        <img
          src={images.darioImg}
          className="md:w-1/3 max-h-[70%] lg:max-h-none object-cover hidden md:inline rounded-md"
          alt="Foto perfil darío"
        />
      </div>
    </section>
  );
};
