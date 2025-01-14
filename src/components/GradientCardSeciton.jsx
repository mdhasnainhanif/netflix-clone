import React from "react";
import GradientCard from "./GradientCard";

const GradientCardSeciton = () => {
  return (
    <>
      <section className="bg-black border-b-8 border-[#232323] py-32">
        <div className="container mx-auto md:px-0 px-6 lg:max-w-[75%]">
          <div className="grid md:grid-cols-4 gap-4">
            <GradientCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default GradientCardSeciton;
