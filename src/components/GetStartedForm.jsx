import React from "react";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa6";

const GetStartedForm = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-center text-white text-[17px] md:mb-0 mb-5 mt-6 font-semibold">Ready to watch? Enter your email to create or restart your membership.</p>
        <input type="search" placeholder="Email Address" className="text-white mt-4 bg-[#19191762] getStartedFormInput md:w-[40%] border border-slate-400 rounded" />
        <Button name="Get Started" class="bg-[#C11119] text-white py-3 px-7 ms-3 md:mt-0 mt-3 text-[21px] " icon={<FaAngleRight className="inline mb-1" />} />
      </div>
    </>
  );
};

export default GetStartedForm;