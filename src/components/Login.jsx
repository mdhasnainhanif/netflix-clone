import React from "react";
import Banner from "../assets/images/login/login-banner.jpg";
import { Input } from "../@/components/ui/input";
import Button from "./Button";
import { Checkbox } from "../@/components/ui/checkbox";

const Login = () => {
  return (
    <>
      <section
        className="h-[100vh] top-0 left-0 w-full bg-center bg-cover bg-no-repeat border-red-600 border-collapse pt-24 pb-24"
        style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${Banner}) center / cover no-repeat` }}>
        <div className="absolute inset-0 bg-black opacity-30 before:bg-black before:opacity-30 h-[100vh]"></div>
        <div className="container h-[650px] flex justify-center items-center mx-auto flex-col z-10 lg:max-w-[25%] bg-[#00000091] relative p-4 rounded">
          <div className="lg:max-w-[300px]">
            <h1 className="text-white font-bold text-4xl text-start">Sign In</h1>
            <Input className="w-[300px] text-white bg-[#19191762] border-2 border-slate-400 rounded py-6 mt-8" type="email" placeholder="Email" />
            <Input className="w-[300px] text-white bg-[#19191762] border border-slate-400 rounded py-6 mt-8" type="password" placeholder="Password" />
            <Button name="Sign In" class="bg-[#C11119] hover:bg-[#C11119] text-white py-2 px-7 mt-8 w-[300px] text-[16px] " />
            <p className="text-center text-gray-300 my-4">OR</p>
            <Button name="Use a Sign-In Code" class="bg-[#3B3F3E] hover:bg-[#3b3b3b] text-white py-2 px-7 mt-4 w-[300px] text-[16px] " />
            <div className="flex items-center space-x-2">
              <div className="items-top flex space-x-2 mt-5">
                <Checkbox id="terms1" className="border-white rounded"/>
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="terms1" className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <p className="text-[#FFFFFFB2] text-start mt-2">New to Netflix? <span className="font-bold text-white">Sign up now.</span></p>
            <p className="text-[#FFFFFFB2] text-sm text-start mt-3">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600">learn more.</span></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
