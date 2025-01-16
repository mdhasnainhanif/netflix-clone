import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HomeSecond from "./pages/homeSecond/homeSecond";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Search from "./pages/search";

const routes = () => {

  const isLoginPage = window.location.pathname === '/login';
  const headerNotShow = window.location.pathname === '/home-second';

  return (
    <>
      <BrowserRouter>
        {/* <Header headerNotShow={headerNotShow} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home-second" element={<HomeSecond />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
        {/* <Footer isLoginPage={isLoginPage}/> */}
      </BrowserRouter>
    </>
  );
};

export default routes;
