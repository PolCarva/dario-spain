import React, { useRef, useState } from "react";
import { Link as NavLink } from "react-scroll";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SpainIcon from "./SpainIcon";
import UkIcon from "./UkIcon";

const NavItem = ({ item, closeNav, setLang, lang, onLanguageChange }) => {
  const { t } = useTranslation();

  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const navLinkRef = useRef(null);

  const isNotHome = location.pathname !== "/";

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };

  const handleNavLinkClick = () => {
    closeNav();
    if (isNotHome) {
      localStorage.setItem("scrollToSection", item.href);
    }
  };

  return (
    <li className="relative group font-body font-light text-xl md:text-3xl md:pt-5 lg:pt-0 lg:text-sm">
      {/* Nav Links */}
      {item.type === "navLink" ? (
        isNotHome ? (
          <Link
            to="/"
            onClick={handleNavLinkClick}
            className={`relative text-white flex cursor-pointer items-center gap-2 px-4 transition-all duration-500`}
          >
            {item.icon}
            {t(item.name)}
            <span
              className={`absolute inset-x-0 -bottom-1 h-[0.9px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
            ></span>
          </Link>
        ) : (
          <NavLink
            ref={navLinkRef}
            activeClass="active"
            onClick={closeNav}
            to={item.href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className={`relative text-white flex cursor-pointer items-center gap-2 px-4 transition-all duration-500`}
          >
            {item.icon}
            {item.name}
            <span
              className={`absolute inset-x-0 -bottom-1 h-[0.9px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
            ></span>
          </NavLink>
        )
      ) : item.type === "link" ? (
        <Link
          onClick={closeNav}
          to={item.href}
          className={`relative text-white flex items-center gap-2 px-4 transition-all duration-500`}
        >
          {item.icon}
          {item.name}
          <span
            className={`absolute inset-x-0 -bottom-1 h-[0.9px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
              isPortfolio && "scale-x-100"
            }`}
          ></span>
        </Link>
      ) : (
        item.type === "dropdown" && (
          // Dropdown
          <div className="flex flex-col items-center group">
            <button
              onClick={toggleDropdownHandler}
              className="flex gap-x-1 items-center px-4 transition-all duration-500"
            >
              <span className="text-white flex gap-2 justify-between items-center">
                {item.icon}
                {item.name}
              </span>
              <MdKeyboardArrowDown className="text-white group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div
              className={`${
                dropdown ? "block" : "hidden"
              } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-3 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
            >
              <ul className="text-center flex flex-col shadow-lg rounded-md overflow-hidden">
                {item.items?.map((language, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setLang(language.title.toLowerCase());
                      onLanguageChange(language.title.toLowerCase());
                    }}
                    className={`${
                      language.title.toUpperCase() === lang.toUpperCase() &&
                      "bg-[#E3E3E3]"
                    } cursor-pointer transition-transform duration-300 flex justify-around items-center gap-1 bg-[#F8F8F8] text-black hover:bg-[#d6d4d4] px-4 py-2`}
                  >
                    {language.title.toUpperCase() === "ES" ? (
                      <SpainIcon className={"w-4 md:w-8 lg:w-4 h-full"} />
                    ) : (
                      <UkIcon className={"w-4 md:w-8 lg:w-4 h-full"} />
                    )}

                    {language.title.toUpperCase()}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        )
      )}
    </li>
  );
};

export default NavItem;
