import React from "react";
import Kids from "../assets/images/home/kids.png";

const HomeSection4 = () => {
  return (
    <>
      <section className="bg-black border-b-8	border-[#232323]	">
        <div className="container py-24 mx-auto md:px-0 px-6 lg:max-w-[70%]">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <img className="md:w-[550px]" src={Kids} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-16 md:mt-0">
              <h1 className="text-white md:text-[48px] text-[40px] text-left font-bold">Create profiles for kids</h1>
              <p className="md:text-[24px] text-[20px] text-white text-left">Send kids on adventures with their favorite characters <br/> in a space made just for them—free with your <br/> membership.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection4;
