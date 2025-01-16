import React from "react";
import Button from "./Button";
import logo from "../assets/images/logo/logo.svg";

const Header = ({ headerNotShow }) => {
  return (
    <>
      <header className={`w-full absolute ${headerNotShow ? "hidden" : ""}`}>
        <div className="container mx-auto py-4 z-10 relative md:px-0 px-6 lg:max-w-[75%]">
          <header className="flex items-center justify-between w-100 ">
            <div>
              <img width={140} src={logo} alt="" />
            </div>
            <div>
              <Button class="bg-red-700 text-white" name="Sign in" />
            </div>
          </header>
        </div>
      </header>
    </>
  );
};

export default Header;
