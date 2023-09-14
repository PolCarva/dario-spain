import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import { images, imgBooks } from "../constants/images";

const navItemsInfo = [
  { name: "Inicio", type: "link", href: "/" },
  { name: "Acerca de mi", type: "link", href: "#about" },
  { name: "Portafolio", type: "link", href: "#portafolio" },
  { name: "Contacto", type: "link", href: "#contacto" },
  {
    name: "ES",
    type: "dropdown",
    items: [
      { title: "ES", href: "#" },
      { title: "EN", href: "#" },
    ],
  },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const isActive = item.href && location.pathname === item.href;

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };

  return (
    <li className="relative group font-body font-light text-xl md:text-sm">
      {/* Links */}
      {item.type === "link" ? (
        <Link
          to={item.href}
          className={`relative text-white flex items-center gap-2 px-4 transition-all duration-500 ${
            isActive ? "active" : ""
          }`}
        >
          {item.icon}
          {item.name}
          <span className="absolute inset-x-0 -bottom-1 h-[0.9px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      ) : (
        /* Dropdown */
        <div className="flex flex-col items-center">
          <button
            onClick={toggleDropdownHandler}
            className="flex gap-x-1 items-center px-4 transition-all duration-500"
          >
            <span className="text-white ">{item.name}</span>
            <MdKeyboardArrowDown className="text-white" />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-3 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-primary lg:bg-white text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="bg-primary text-white hover:text-white hover:bg-primary-subtle px-4 py-2 "
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-black p-normalize">
      <img src={imgBooks.Book1} alt="" />
      <header className="container mx-auto flex justify-between py-4 items-center">
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
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
