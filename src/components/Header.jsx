import React, { useEffect, useState } from "react";
import Button from "./Button";
import logo from "../assets/images/logo/logo.svg";
import Container from "./Container";
import { HamBurgerIcon, SearchIcon } from "./Icons";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ headerNotShow }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const homeLink = window.location.pathname === "/";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openMobileMenu = () => {
    setMobileMenu((prev) => {
      if (!prev) {
        setShowSearch(false);
      }
      return !prev;
    });
  };

  const openSearchBar = () => {
    setShowSearch((prev) => {
      if (!prev) {
        setMobileMenu(false);
      }
      return !prev;
    });
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/search/movies");
    } else {
      navigate("/search/tv");
    }
    setMobileMenu(false);
  };

  return (
    <>
      {homeLink && (
        <header className={`w-full absolute ${headerNotShow ? "hidden" : ""}`}>
          <div className="container mx-auto py-4 z-10 relative md:px-0 px-6 lg:max-w-[75%]">
            <header className="flex items-center justify-between w-100 ">
              <div className="flex">
                <img width={140} src={logo} alt="" />
              </div>
              <div>
                <Button class="bg-red-700 text-white" name="Sign in" />
              </div>
            </header>
          </div>
        </header>
      )}

      {/* second header */}
      {!homeLink && (
        <header
          className={`w-full absolute md:bg-transparent bg-gray-600 bg-opacity-50 backdrop-blur-sm z-10 ${
            headerNotShow ? "hidden" : ""
          }`}
        >
          <div className="container mx-auto py-4 z-10 relative md:px-0 px-6 lg:max-w-[90%]">
            <header className="flex items-center justify-between w-100 ">
              <div className="flex">
                <img width={140} src={logo} alt="" />
                <div className={`menuItems ${mobileMenu && "show"}`}>
                  <ul className="text-white flex ms-10 gap-3 p-0 items-center">
                    <li>Home</li>
                    <li onClick={() => navigationHandler("tv")}>TV Shows</li>
                    <li onClick={() => navigationHandler("movie")}>Movies</li>
                  </ul>
                </div>
              </div>
              <div>
                <div
                  className={`max-w-60 relative headerSearchMain ${
                    showSearch ? "show" : ""
                  }`}
                >
                  <input
                    className="w-full border-2 border-gray-500 ps-8 pe-2 py-1 bg-black text-gray-100 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Search movie or tv show"
                  />
                  <SearchIcon />
                </div>
                <div className="md:hidden block">
                  <div className="flex gap-5">
                    <span onClick={openSearchBar}>
                      <SearchIcon />
                    </span>
                    <span onClick={openMobileMenu}>
                      <HamBurgerIcon />
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
