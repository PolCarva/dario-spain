import React from "react";
import { GiHighHeel, GiAmpleDress } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiSolidDrink } from "react-icons/bi";
import { LiaAddressBookSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <div className="relative flex justify-between w-full md:w-2/3 mx-auto mb-12 font-body">
      <div className="absolute bg-black w-full h-[1px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <Link to={"/portfolio/desfiles"} className="relative w-14 h-14 rounded-full bg-primary grid content-center text-center z-10">
        <GiHighHeel className="w-full h-full p-3 text-white" />
        <span className="absolute font-medium -bottom-8 left-1/2 -translate-x-1/2">
          Desfiles
        </span>
      </Link>
      <Link to={"/portfolio/moda"} className="relative w-14 h-14 rounded-full bg-primary grid content-center text-center z-10">
        <GiAmpleDress className="w-full h-full p-3 text-white" />
        <span className="absolute font-medium -bottom-8 left-1/2 -translate-x-1/2">
          Moda
        </span>
      </Link>
      <Link to={"/portfolio/conciertos"} className="relative w-14 h-14 rounded-full bg-primary grid content-center text-center z-10">
        <FaMusic className="w-full h-full p-4 text-white" />
        <span className="absolute font-medium -bottom-8 left-1/2 -translate-x-1/2">
          Conciertos
        </span>
      </Link>
      <Link to={"/portfolio/fotoperiodismo"} className="relative w-14 h-14 rounded-full bg-primary grid content-center text-center z-10">
        <BsCameraReelsFill className="w-full h-full p-4 text-white" />
        <span className="absolute font-medium -bottom-8 left-1/2 -translate-x-1/2">
          Fotoperiodismo
        </span>
      </Link>
      <Link to={"/portfolio/eventos"} className="relative w-14 h-14 rounded-full bg-primary grid content-center text-center z-10">
        <BiSolidDrink className="w-full h-full p-3 text-white" />
        <span className="absolute font-medium -bottom-8 left-1/2 -translate-x-1/2">
          Eventos
        </span>
      </Link>
      <Link to={"/portfolio/books"} className="relative w-14 h-14 rounded-full bg-primary grid content-center text-center z-10">
        <LiaAddressBookSolid className="w-full h-full p-3 text-white" />
        <span className="absolute font-medium -bottom-8 left-1/2 -translate-x-1/2">
          Book's
        </span>
      </Link>
    </div>
  );
};

export default Timeline;
