import React from "react";
import { images } from "../constants/images";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { Link as NavLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isPortfolio = location.pathname === "/portfolio";

  const handleNavLinkClick = (section) => {
    if (isPortfolio) {
      localStorage.setItem("scrollToSection", section);
    }
  };

  return (
    <div className="mx-auto text-white p-normalize pt-10 pb-5 font-body">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-16  md:gap-32">
        <div className="flex flex-col gap-3">
          <img
            src={images.logo}
            alt="Darío Spain"
            className="w-1/2 mx-auto md:w-full"
          />
          <span className="md:-mx-5 text-center font-light italic text-sm">
            {t("footer.quote")}
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center text-xl md:text-base">
          <ul className="grid grid-cols-2 gap-5 md:flex md:flex-col md:gap-1">
            {/* Inicio */}
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              {isPortfolio ? (
                <Link
                  to="/"
                  onClick={() => handleNavLinkClick("hero")}
                  className="cursor-pointer"
                >
                  {t("navbar.home")}
                </Link>
              ) : (
                <NavLink
                  to={"hero"}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="cursor-pointer"
                >
                  {t("navbar.home")}
                </NavLink>
              )}
            </li>
            {/* About */}
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              {isPortfolio ? (
                <Link
                  to="/"
                  onClick={() => handleNavLinkClick("about")}
                  className="cursor-pointer"
                >
                  {t("navbar.about-me")}
                </Link>
              ) : (
                <NavLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="cursor-pointer"
                >
                  {t("navbar.about-me")}{" "}
                </NavLink>
              )}
            </li>
            {/* Portfolio */}
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              <Link to="/portfolio" className="cursor-pointer">
                {t("navbar.portfolio")}
              </Link>
            </li>
            {/* Contacto */}
            <li className="font-light flex gap-4 items-center justify-start">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
              {isPortfolio ? (
                <Link
                  to="/"
                  onClick={() => handleNavLinkClick("contact")}
                  className="cursor-pointer"
                >
                  {t("navbar.contact")}
                </Link>
              ) : (
                <NavLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="cursor-pointer"
                >
                  {t("navbar.contact")}
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div id="contact" className="flex flex-col gap-5">
          <p className="text-center font-bold text-xl md:text-base">
            {t("footer.follow-me")}
          </p>
          <div className="flex justify-between w-1/2 mx-auto md:w-full">
            <BsInstagram
              className="h-8 w-8 cursor-pointer hover:text-primary-subtle transition-colors duration-300"
              onClick={() => {
                window.open("https://www.instagram.com/dariospain/", "_blank");
              }}
            />
            <BsWhatsapp
              className="h-8 w-8 cursor-pointer hover:text-primary-subtle transition-colors duration-300"
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send?phone=+549351573-9982&text=${encodeURIComponent(
                    t("contact-buttons.whatsapp-msg")
                  )}`,
                  "_blank"
                );
              }}
            />
            <FiMail
              className="h-8 w-8 cursor-pointer hover:text-primary-subtle transition-colors duration-300"
              onClick={() => {
                window.location.href = `mailto:dariolocucion@gmail.com?subject=Interesado en tus servicios&body=${t(
                  "contact-buttons.whatsapp-msg"
                )}`;
              }}
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-xs text-gray font-light">
        Copyright ©️ {new Date().getFullYear()} <br />
        {t("footer.rights")}
      </p>
    </div>
  );
};

export default Footer;
