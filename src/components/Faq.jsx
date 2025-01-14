import React, { useState } from "react";
import "../assets/css/style.css";
import GetStartedForm from "./GetStartedForm";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-black border-b-8	border-[#232323]	">
      <div className="py-24 mx-auto md:px-0 px-6 lg:max-w-[75%]">
        <div className="flex flex-col justify-center w-full">
          <h3 className="mb-8">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Frequently Asked Questions</span>
          </h3>
          <div className="mt-10">
            <div className="relative mb-2">
              <input type="checkbox" id="toggle1" className="toggle hidden" checked={activeIndex === 1} onChange={() => handleToggle(1)} />
              <label className="text-start text-2xl title block bg-[#2D2D2D] hover:bg-[#414141] px-4 py-6 cursor-pointer text-white" htmlFor="toggle1">
                What is Netflix?
              </label>
              <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
                <p className="p-4 text-xl">
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected
                  devices.
                </p>
                <p className="p-4 text-xl">
                  You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new
                  TV shows and movies are added every week!
                </p>
              </div>
            </div>
            <div className="relative mb-2">
              <input type="checkbox" id="toggle2" className="toggle hidden" checked={activeIndex === 2} onChange={() => handleToggle(2)} />
              <label className="text-start text-2xl title block bg-[#2D2D2D] hover:bg-[#414141] px-4 py-6 cursor-pointer text-white" htmlFor="toggle2">
                How much does Netflix cost?
              </label>
              <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
                <p className="p-4 text-xl">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No
                  extra costs, no contracts.
                </p>
              </div>
            </div>
            <div className="relative mb-2">
              <input type="checkbox" id="toggle3" className="toggle hidden" checked={activeIndex === 3} onChange={() => handleToggle(3)} />
              <label className="text-start text-2xl title block bg-[#2D2D2D] hover:bg-[#414141] px-4 py-6 cursor-pointer text-white" htmlFor="toggle3">
                Where can I watch?
              </label>
              <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
                <p className="p-4 text-xl">
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected
                  device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                </p>
                <p className="p-4 text-xl">
                  You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet
                  connection. Take Netflix with you anywhere.
                </p>
              </div>
            </div>
            <div className="relative mb-2">
              <input type="checkbox" id="toggle4" className="toggle hidden" checked={activeIndex === 4} onChange={() => handleToggle(4)} />
              <label className="text-start text-2xl title block bg-[#2D2D2D] hover:bg-[#414141] px-4 py-6 cursor-pointer text-white" htmlFor="toggle4">
                How do I cancel?
              </label>
              <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
                <p className="p-4 text-xl">
                  Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees –
                  start or stop your account anytime.
                </p>
              </div>
            </div>
            <div className="relative mb-2">
              <input type="checkbox" id="toggle5" className="toggle hidden" checked={activeIndex === 5} onChange={() => handleToggle(5)} />
              <label className="text-start text-2xl title block bg-[#2D2D2D] hover:bg-[#414141] px-4 py-6 cursor-pointer text-white" htmlFor="toggle5">
                What can I watch on Netflix?
              </label>
              <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
                <p className="p-4 text-xl">
                  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime
                  you want.
                </p>
              </div>
            </div>
            <div className="relative mb-2">
              <input type="checkbox" id="toggle6" className="toggle hidden" checked={activeIndex === 6} onChange={() => handleToggle(6)} />
              <label className="text-start text-2xl title block bg-[#2D2D2D] hover:bg-[#414141] px-4 py-6 cursor-pointer text-white" htmlFor="toggle6">
                Is Netflix good for kids?
              </label>
              <div className="content bg-[#2D2D2D] text-white mt-1 overflow-hidden text-lg text-start">
                <p className="p-4 text-xl">
                  The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                </p>
                <p className="p-4 text-xl">
                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t
                  want kids to see.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <GetStartedForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
