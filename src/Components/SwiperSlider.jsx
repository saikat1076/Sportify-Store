import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import photo2 from "../assets/sportspic1.jpg";
import photo1 from "../assets/sportspic2.jpg";
import photo3 from "../assets/sportsimg.jpg";

const SwipeSlider = () => {
  return (
    <div className="mx-auto rounded-md my-2">
      
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={photo1} alt="Slide 1" className="w-full h-[400px] rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo2} alt="Slide 2" className="w-full h-[400px] rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo3} alt="Slide 3" className="w-full h-[400px] rounded-lg" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default SwipeSlider;
