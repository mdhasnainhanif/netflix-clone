import React from "react";
import MovieCard from "./MovieCard";

const MoviesCardSection = () => {
  return (
    <>
      <section className="bg-black border-y-8	border-[#232323] py-32">
        <div className="container mx-auto md:px-0 px-6 lg:max-w-[70%]">
          <MovieCard />
        </div>
      </section>
    </>
  );
};

export default MoviesCardSection;
