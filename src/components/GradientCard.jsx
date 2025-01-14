import React from "react";
import { GradientCardData } from "../pageData/GradientCardData";

const GradientCard = () => {
  return (
    <>
      {GradientCardData?.map((item, index) => {
        return (
          <div className="relative cursor-pointer gradientCard px-5 pt-5 pb-24 w-100 rounded-2xl overflow-hidden" key={index}>
            <h3 className="text-white text-start text-[1.35rem] font-bold">{item?.title}</h3>
            <p className="text-gray-300 text-start mt-4">{item?.description}</p>
            <div className="w-100 absolute right-1 bottom-2">
              {item?.icon}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GradientCard;
