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
import { useLocation } from "react-router-dom";
import Timeline from "../components/Timeline";

const PortfolioPage = () => {
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
        <div className="p-normalize flex flex-col md:gap-5">
          {/* <h1 className="text-4xl text-center font-bold pb-5 font-logo">
            Mis Fotografías
          </h1> */}
          <Timeline />
          <PhotoGrid images={imgShow} />
        </div>
      </section>
    </MainLayout>
  );
};

export default PortfolioPage;
