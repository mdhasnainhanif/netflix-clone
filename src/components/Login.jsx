import React from "react";
import Banner from "../assets/images/home/home-banner.jpg";
import { Input } from "../@/components/ui/input";
import Button from "./Button";
import { Checkbox } from "../@/components/ui/checkbox";

const Login = () => {
  return (
    <>
      <section
        className="h-[700px] top-0 left-0 w-full bg-center bg-cover bg-no-repeat border-red-600 border-collapse pt-24 pb-24"
        style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${Banner}) center / cover no-repeat` }}>
        <div className="absolute inset-0 bg-black opacity-30 before:bg-black before:opacity-30 h-[700px]"></div>
        <div className="container h-[650px] flex justify-center items-center mx-auto flex-col z-10 lg:max-w-[27%] bg-[#000000b2] relative p-4">
          <div>
            <h1 className="text-white font-bold text-4xl text-start">Sign In</h1>
            <Input className="w-[300px] text-white bg-[#19191762] border-2 border-slate-400 rounded py-6 mt-8" type="email" placeholder="Email" />
            <Input className="w-[300px] text-white bg-[#19191762] border border-slate-400 rounded py-6 mt-8" type="password" placeholder="Password" />
            <Button name="Sign In" class="bg-[#C11119] hover:bg-[#C11119] text-white py-2 px-7 mt-8 w-[300px] text-[16px] "/>
            <p className="text-center text-gray-300 my-4">OR</p>
            <Button name="Use a Sign-In Code" class="bg-[#3B3F3E] hover:bg-[#3b3b3b] text-white py-2 px-7 mt-4 w-[300px] text-[16px] "/>
            <Checkbox/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
