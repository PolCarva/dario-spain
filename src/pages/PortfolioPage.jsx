import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import {
  imgBooks,
  imgClientes,
  imgConciertos,
  imgDesfiles,
  imgEventos,
  imgFotoperiodismo,
  imgModa,
} from "../constants/images";
import PhotoGrid from "../components/PhotoGrid";
import { Link, useLocation } from "react-router-dom";
import Timeline from "../components/Timeline";

import { useTranslation } from "react-i18next";

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [imgShow, setImgShow] = useState(imgDesfiles);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/portfolio":
        setImgShow(imgDesfiles);
        break;
      case "/portfolio/books":
        setImgShow(imgBooks);
        break;
      case "/portfolio/clientes":
        setImgShow(imgClientes);
        break;
      case "/portfolio/conciertos":
        setImgShow(imgConciertos);
        break;
      case "/portfolio/desfiles":
        setImgShow(imgDesfiles);
        break;
      case "/portfolio/eventos":
        setImgShow(imgEventos);
        break;
      case "/portfolio/fotoperiodismo":
        setImgShow(imgFotoperiodismo);
        break;
      case "/portfolio/moda":
        setImgShow(imgModa);
        break;
      default:
        setImgShow(imgDesfiles);
        break;
    }
  }, [location.pathname]);

  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-[#767676] via-10% via-white to-white relative font-body py-5">
        <Link
          to="/"
          className="p-normalize text-primary underline font-semibold hover:text-primary-hover transition-colors duration-300"
        >
          {t("portfolio.back-home")}
        </Link>
        <div className="p-normalize mt-5 md:mt-0 flex flex-col md:gap-5">
          <Timeline />
          <PhotoGrid images={imgShow} />
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioPage;
