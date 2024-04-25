import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-black border-b-8	border-[#232323]">
        <div className="container py-24 mx-auto md:px-0 px-6 lg:max-w-[70%]">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <ul className="text-white text-start">
                <li className="py-1 underline">Questions? Contact us.</li>
                <li className="py-1 underline">FAQ</li>
                <li className="py-1 underline">Investor Relations</li>
                <li className="py-1 underline">Privacy</li>
                <li className="py-1 underline">Speed Test</li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-start">
                <li className="py-1 underline">Help Center</li>
                <li className="py-1 underline">Jobs</li>
                <li className="py-1 underline">Cookie Preferences</li>
                <li className="py-1 underline">Legal Notices</li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-start">
                <li className="py-1 underline">Account</li>
                <li className="py-1 underline">Ways to Watch</li>
                <li className="py-1 underline">Corporate Information</li>
                <li className="py-1 underline">Only on Netflix</li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-start">
                <li className="py-1 underline">Media Center</li>
                <li className="py-1 underline">Terms of Use</li>
                <li className="py-1 underline">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;