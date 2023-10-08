import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineClose } from "react-icons/ai";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Carousel3D = ({ activeImage, images, onClose }) => {
  const activeIndex = Object.keys(images).indexOf(activeImage);

  return (
    <div className="w-full h-full fixed z-50 inset-0 p-5 bg-gradient-to-b from-primary to-black">
      <div className="absolute top-5 right-5 text-white w-8 h-8 z-50">
        <AiOutlineClose
          onClick={onClose}
          className="w-full h-full cursor-pointer"
        />
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        navigation={true}
        pagination={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth <= 768 ? 1 : 2}
        initialSlide={activeIndex}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper carousel absolute inset-0 z-0"
      >
        {Object.values(images).map(
          (image, index) =>
            !image.includes("small") && (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                <img
                  src={image}
                  className={`object-contain w-full max-h-[70vh] select-none`}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default Carousel3D;
