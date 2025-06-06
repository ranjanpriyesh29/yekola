import React from "react";
import Input from "../components/Input";
import Yeloka from "../assets/Logo-1 1.png";

const Login = () => {
  return (
    <div className="bg-[#1e1e1e] h-screen w-full text-white flex flex-col justify-center items-center gap-[5.5rem]">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg">Welcome Back to</h1>
        <img src={Yeloka} alt="" />
      </div>
      <form className="flex flex-col gap-4.5">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
