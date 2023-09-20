import React from "react";
import { images } from "../constants/images";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { Link as NavLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="mx-auto text-white p-normalize pt-10 pb-5 font-body">
      <div className=" grid grid-cols-3 gap-32">
        <div className="flex flex-col gap-3">
          <img src={images.logo} alt="Darío Spain" className="" />
          <span className=" text-center font-light italic text-sm">
            “Si puede ser escrito o pensado, puede ser fotografiado”
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <ul>
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              <NavLink
                to={"hero"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Inicio
              </NavLink>
            </li>
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              <NavLink
                to={"about"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Acerca de mi
              </NavLink>
            </li>
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              Portafolio
            </li>
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>Contacto
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-center font-bold">Seguime y contáctanos</p>
          <div className="flex justify-between">
            <BsInstagram className="h-8 w-8" />
            <BsWhatsapp className="h-8 w-8" />
            <FiMail className="h-8 w-8" />
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-xs text-gray font-light">
        Copyright ©️ 2023 <br />
        Todos los derechos reservados
      </p>
    </div>
  );
};

export default Footer;
