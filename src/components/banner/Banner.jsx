import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://ecloudbd.com/uploads/CDA/slider/lg/20231031075655.jpg"
            alt="banner"
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ecloudbd.com/uploads/CDA/slider/lg/20210812171828.jpg"
            alt="banner"
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

