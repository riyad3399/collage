import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, EffectCreative } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"creative"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCreative, Navigation, Pagination]}
      >
        <SwiperSlide>
          <img
            className="object-cover w-full h-96"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-96"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
