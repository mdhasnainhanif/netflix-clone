import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login";

const routes = () => {

  const isLoginPage = window.location.pathname === '/login';

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer isLoginPage={isLoginPage}/>
      </BrowserRouter>
    </>
  );
};

export default routes;
