import React from 'react'
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa6";

const GetStartedForm = () => {
  return (
    <>
        <div className="">
            <input type="search" placeholder="Email Address" className="text-white mt-4 bg-[#191917] py-3 px-4 md:w-[30%] border border-slate-400 rounded" />
            <Button name="Get Started" class="bg-[#C11119] text-white py-3 px-7 ms-3 md:mt-0 mt-3 text-[18px]" icon={<FaAngleRight className="inline mb-1" />} />
        </div>
    </>
  )
}

export default GetStartedForm