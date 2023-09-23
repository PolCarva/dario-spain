import React from "react";
import { GiHighHeel, GiAmpleDress } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiSolidDrink } from "react-icons/bi";
import { LiaAddressBookSolid } from "react-icons/lia";
import TimelineItem from "./TimelineItem";

const TIMELINE_DATA = [
  { Icon: GiHighHeel, path: "/portfolio/desfiles", label: "Desfiles" },
  { Icon: GiAmpleDress, path: "/portfolio/moda", label: "Moda" },
  { Icon: FaMusic, path: "/portfolio/conciertos", label: "Conciertos" },
  {
    Icon: BsCameraReelsFill,
    path: "/portfolio/fotoperiodismo",
    label: "Fotoperiodismo",
  },
  { Icon: BiSolidDrink, path: "/portfolio/eventos", label: "Eventos" },
  { Icon: LiaAddressBookSolid, path: "/portfolio/books", label: "Book's" },
];

const Timeline = () => {
  return (
    <div className="relative flex justify-between w-full lg:w-2/3 mx-auto mb-5 md:mb-12 font-body">
      <div className="absolute bg-black w-full h-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      {TIMELINE_DATA.map((item) => (
        <TimelineItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
