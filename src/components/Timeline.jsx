import React from "react";
import { GiHighHeel, GiAmpleDress } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiSolidDrink } from "react-icons/bi";
import { LiaAddressBookSolid } from "react-icons/lia";
import TimelineItem from "./TimelineItem";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  const TIMELINE_DATA = [
    {
      Icon: GiHighHeel,
      path: "/portfolio/desfiles",
      label: t("portfolio.categories.fashion-shows"),
    },
    {
      Icon: GiAmpleDress,
      path: "/portfolio/moda",
      label: t("portfolio.categories.fashion"),
    },
    {
      Icon: FaMusic,
      path: "/portfolio/conciertos",
      label: t("portfolio.categories.concerts"),
    },
    {
      Icon: BsCameraReelsFill,
      path: "/portfolio/fotoperiodismo",
      label: t("portfolio.categories.photojournalism"),
    },
    {
      Icon: BiSolidDrink,
      path: "/portfolio/eventos",
      label: t("portfolio.categories.events"),
    },
    {
      Icon: LiaAddressBookSolid,
      path: "/portfolio/books",
      label: t("portfolio.categories.books"),
    },
  ];

  return (
    <div className="relative flex justify-between w-full lg:w-4/5 xl:w-2/3 mx-auto my-5 md:mb-12 font-body">
      <div className="absolute bg-black w-full h-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      {TIMELINE_DATA.map((item) => (
        <TimelineItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
