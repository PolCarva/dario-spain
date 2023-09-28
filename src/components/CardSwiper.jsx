import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { GiHighHeel, GiAmpleDress } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { BiSolidDrink } from "react-icons/bi";
import { LiaAddressBookSolid } from "react-icons/lia";

import { useTranslation } from "react-i18next";

import CardComponent from "./CardComponent";
import {
  imgBooks,
  imgConciertos,
  imgDesfiles,
  imgEventos,
  imgFotoperiodismo,
  imgModa,
} from "../constants/images";

const CardSwiper = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white" id="portfolio">
      <h2 className="py-5 font-logo text-center w-full px-2 font-bold lg:text-2xl md:text-xl text-lg">
        {t("portfolio.title")}
      </h2>
      <div className="py-5 h-[50vh] md:h-[40vh] lg:h-[75vh]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper p-normalize flex flex-col items-center"
        >
          <SwiperSlide className="h-4/5 flex mb-16">
            <CardComponent
              title={t("portfolio.categories.fashion-shows")}
              id="desfiles"
              img={imgDesfiles.desfile1}
              icon={<GiHighHeel className="w-full h-full p-1" />}
            />
          </SwiperSlide>
          <SwiperSlide className="h-4/5 mt-16">
            <CardComponent
              title={t("portfolio.categories.concerts")}
              id="conciertos"
              img={imgConciertos.concierto1}
              icon={<FaMusic className="w-full h-full p-1.5" />}
            />
          </SwiperSlide>
          <SwiperSlide className="h-4/5 mb-16">
            <CardComponent
              title={t("portfolio.categories.fashion")}
              id="moda"
              img={imgModa.moda1}
              icon={<GiAmpleDress className="w-full h-full p-1.5" />}
            />
          </SwiperSlide>
          <SwiperSlide className="h-4/5 mt-16">
            <CardComponent
              title={t("portfolio.categories.photojournalism")}
              id="fotoperiodismo"
              img={imgFotoperiodismo.fotoperiodismo1}
              icon={<BsCameraReelsFill className="w-full h-full p-1.5" />}
            />
          </SwiperSlide>
          <SwiperSlide className="h-4/5 ">
            <CardComponent
              title={t("portfolio.categories.events")}
              id="eventos"
              img={imgEventos.evento1}
              icon={<BiSolidDrink className="w-full h-full p-1.5" />}
            />
          </SwiperSlide>
          <SwiperSlide className="h-4/5 mt-16">
            <CardComponent
              title={t("portfolio.categories.books")}
              id="books"
              img={imgBooks.book1}
              icon={<LiaAddressBookSolid className="w-full h-full p-1" />}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CardSwiper;
