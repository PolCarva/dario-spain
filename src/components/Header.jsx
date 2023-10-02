import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { images, imgBooks } from "../constants/images";
import NavItem from "./NavItem";

import spainImg from "../assets/img/spain.png";
import ukImg from "../assets/img/uk.png";
import SpainIcon from "./spainIcon";
import UkIcon from "./ukIcon";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [navIsVisible, setNavIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState("es");

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const closeNav = () => {
    setNavIsVisible(false);
  };

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
    closeNav();
  };

  const navItemsInfo = [
    { name: t("navbar.home"), type: "navLink", href: "hero" },
    { name: t("navbar.portfolio"), type: "navLink", href: "portfolio" },
    { name: t("navbar.about-me"), type: "navLink", href: "about" },
    { name: t("navbar.contact"), type: "navLink", href: "contact" },
    {
      name: currentLang.toUpperCase(),
      icon:
        currentLang === "es" ? (
          <SpainIcon className={"w-4 h-full"}/>
        ) : (
          <UkIcon className={"w-4 h-full"}/>
          ),

      type: "dropdown",
      items: [{ title: "ES" }, { title: "EN" }],
    },
  ];

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-black p-normalize">
      <img src={imgBooks.Book1} alt="" />
      <header className="mx-auto flex justify-between py-4 items-center">
        <Link to={"/"}>
          <img src={images.logo} alt="" className="h-5" />
        </Link>
        <div className="text-white z-50 visible lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          }  mt-[56px] lg:mt-0 bg-black lg:bg-transparent z-[49] flex flex-col lg:flex-row w-full lg:w-auto justify-center lg:justify-end  fixed top-0 bottom-0 lg:static gap-x-9 items-center transition-all duration-500`}
        >
          <ul className="items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item, index) => (
              <NavItem
                setLang={setCurrentLang}
                lang={currentLang}
                key={index}
                item={item}
                closeNav={closeNav}
                onLanguageChange={changeLanguage}
              />
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
