import React from "react";
import MovieCard from "./MovieCard";
import { CardData } from "../pageData/MovieCardData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import GradientCardSeciton from "./GradientCardSeciton";



const MoviesCardSection = () => {
  return (
    <>
    <section className="bg-black pt-32">
      <div className="container mx-auto md:px-0 px-6 lg:max-w-[75%]">
        <Swiper
          className="movieCardSlider"
          spaceBetween={50}
          slidesPerView={5} 
          slidesPerGroup={5}
          onSlideChange={() => console.log("slide change")}
          modules={[Navigation]}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}>
          {CardData?.length > 0 ? (
            CardData.map((item, index) =><SwiperSlide key={index}> <MovieCard key={index} data={item} /></SwiperSlide>)
          ) : (
            <p className="text-white">No movies available</p>
          )}
        </Swiper>
      </div>
    </section>
    <GradientCardSeciton/>

    </>
  );
};

export default MoviesCardSection;
