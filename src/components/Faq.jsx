import React, { useState } from "react";
import '../assets/css/style.css'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-black border-b-8	border-[#232323]	">
    <div className="py-24 mx-auto md:px-0 px-6 lg:max-w-[70%]">

      <div className="flex flex-col justify-center w-full">
        <h3 className="mb-8">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Frequently Asked Questions</span>
        </h3>
        <div className="mt-10">
          <div className="relative mb-4">
            <input type="checkbox" id="toggle1" className="toggle hidden" checked={activeIndex === 1} onChange={() => handleToggle(1)} />
            <label className="text-start text-2xl title block font-bold bg-[#2D2D2D] px-4 py-6 cursor-pointer text-white" htmlFor="toggle1">
            What is Netflix?
            </label>
            <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
              <p className="p-4">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              </p>
              <p className="p-4">
              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </p>
            </div>
          </div>
          <div className="relative mb-4">
            <input type="checkbox" id="toggle2" className="toggle hidden" checked={activeIndex === 2} onChange={() => handleToggle(2)} />
            <label className="text-start text-2xl title block font-bold bg-[#2D2D2D] px-4 py-6 cursor-pointer text-white" htmlFor="toggle2">
            How much does Netflix cost?
            </label>
            <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
              <p className="p-4">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>
          <div className="relative mb-4">
            <input type="checkbox" id="toggle3" className="toggle hidden" checked={activeIndex === 3} onChange={() => handleToggle(3)} />
            <label className="text-start text-2xl title block font-bold bg-[#2D2D2D] px-4 py-6 cursor-pointer text-white" htmlFor="toggle3">
            Where can I watch?
            </label>
            <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
              <p className="p-4">
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              </p>
              <p className="p-4">
              You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Faq;
