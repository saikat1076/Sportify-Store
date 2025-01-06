import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

// Mock data for sports brands with logos and names
const sportsBrands = [
  {
    name: "Nike Football",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelg3Quuby9J34utneoO_che2Bd8S5URO30w&s",
  },
  {
    name: "Adidas Basketball",
    logo: "https://cdn.logojoy.com/wp-content/uploads/20231013152634/09-25-23_Adidas-Logo-Evolution_Header.jpg",
  },
  {
    name: "Puma Fitness",
    logo: "https://fabrikbrands.com/wp-content/uploads/Puma-Logo-1-1155x770.png",
  },
  {
    name: "Under Armour Running",
    logo: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F06%2F04%2Ffirst-look-balenciaga-under-armour-spring-2025-footwear-speed-trainer-3xl-collection-tw.jpg?w=1080&cbr=1&q=90&fit=max",
  },
  {
    name: "New Balance Running",
    logo: "https://i.ytimg.com/vi/kHckWauHDQs/maxresdefault.jpg",
  },
  {
    name: "Wilson Football",
    logo: "https://media.gettyimages.com/id/1916332168/photo/detroit-michigan-a-detail-of-a-wilson-brand-nfl-the-duke-football-held-up-by-a-kicking-tee.jpg?s=612x612&w=gi&k=20&c=a3lJwc6XSP9u6GM1lJA5X28GN7mobUZwPgkSXIKF1UU=",
  },
  {
    name: "MRF Crickets",
    logo: "https://economictimes.indiatimes.com/thumb/msid-101546820,width-1200,height-1200,resizemode-4,imgsize-581356/best-mrf-cricket-bats-in-india-to-play-shots-like-the-legendary-cricketers.jpg?from=mdr",
  },
  {
    name: "Reebok Fitness",
    logo: "https://i.ytimg.com/vi/PPpHfVSKBMs/maxresdefault.jpg",
  },
];

const SportsBrandsSection = () => {
  return (
    <section className="bg-gray-200 lg:px-5">
      <div className="text-center my-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Top Sports Brands</h2>
        <p className="text-lg text-gray-600">
          Discover the best sports brands that offer high-quality gear for all sports!
        </p>
      </div>

      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Number of slides visible at once
        loop={true} // Infinite loop
        autoplay={{
          delay: 2500, // Delay between slides (in ms)
          disableOnInteraction: false, // Keeps autoplay even when user interacts
        }}
        breakpoints={{
          320: { slidesPerView: 2 }, // 2 slides visible on mobile
          768: { slidesPerView: 3 }, // 3 slides visible on tablets
          1024: { slidesPerView: 4 }, // 4 slides visible on desktop
        }}
      >
        {sportsBrands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="text-center  bg-white shadow-lg rounded-lg hover:shadow-xl transition-all relative group">
              <div className="relative w-full h-56 mb-4 overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
                  <h4 className="text-2xl font-bold text-white">{brand.name}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SportsBrandsSection;
