import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import photo2 from "../assets/slide-1.jpg";
import photo3 from "../assets/slide-4.jpg";
import photo1 from "../assets/slide-2.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  // Pagination configuration with custom renderBullet
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" style=" 
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #000;
        opacity: 1;
        background: white;
      ">${index + 1}</span>`; // custom color for bullets
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper p-0 m-0" // Applying p-0 and m-0 to Swiper container
      >
        <SwiperSlide className="p-0 m-0 rounded-none"> {/* Removing padding, margin, and rounding for slides */}
          <img src={photo1} alt="Slide 1" className="w-full h-[400px] rounded-none" /> {/* No border-radius */}
        </SwiperSlide>
        <SwiperSlide className="p-0 m-0 rounded-none">
          <img src={photo2} alt="Slide 2" className="w-full h-[400px] rounded-none" />
        </SwiperSlide>
        <SwiperSlide className="p-0 m-0 rounded-none">
          <img src={photo3} alt="Slide 3" className="w-full h-[400px] rounded-none" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
