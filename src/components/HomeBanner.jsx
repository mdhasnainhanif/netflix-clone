import React from "react";
import Banner from "../assets/images/home/home-banner.jpg";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa6";

const HomeBanner = () => {
  return (
    <>
      <section
        className=" h-[700px] absolute top-0 left-0 w-full bg-center bg-cover bg-no-repeat"
        style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${Banner}) center / cover no-repeat` }}>
        <div className="absolute inset-0 bg-black opacity-30 before:bg-black before:opacity-30"></div>
        <div className="container h-[650px] flex justify-center items-center mx-auto flex-col relative z-10">
          <h1 className="text-center text-white md:text-[48px] text-[30px] font-bold">Unlimited movies, TV shows, and more</h1>
          <h3 className="text-center text-white text-[24px] md:my-0 mt-3">Watch anywhere. Cancel anytime.</h3>
          <p className="text-center text-white text-[20px] md:my-0 my-5">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="w-3/4">
            <input type="search" placeholder="Email Address" className="text-white mt-4 bg-[#191917] py-3 px-4 md:w-[25%] border border-slate-400 rounded" />
            <Button name="Get Started" class="bg-[#C11119] text-white py-3 px-7 ms-3 md:mt-0 mt-3" icon={<FaAngleRight className="inline mb-1" />} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
