"use client";
import Image from "next/image";
import CustomInput from "@/components/input";
import logo from "@/public/assets/auth/logo.svg";
import { FormEvent, useState } from "react";
import { statusState } from "../reset-password/page";
import { AnimatePresence } from "framer-motion";
import ForgotStatus from "@/components/statusPages/ForgotStatus";
import Link from "next/link";

const ForgotPassword = () => {
  const [status, setStatus] = useState<statusState>("pending");

  const handleForgotPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <section className="relative px-6 py-8 ">
      <div className="mb-14 w-[131px] lg:mb-20 lg:w-[200px]">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            className="w-full h-full relative z-20"
          />
        </Link>
      </div>
      <div className="w-full h-[calc(100dvh-280px)] flex flex-col justify-center items-center lg:mx-auto lg:max-w-[800px] lg:px-[100px]">
        <div className="w-full flex flex-col gap-y-1 items-center text-secondaryColor mb-6">
          <h1 className="text-lg font-semibold lg:text-5xl">
            Forgot Password?
          </h1>
          <p className="text-xs text-[#392467] text-center lg:w-3/4 lg:text-secondaryColor lg:text-base">
            Enter your email address and get a link to reset your password
          </p>
        </div>

        <form
          onSubmit={handleForgotPassword}
          className="w-full flex flex-col gap-y-4"
        >
          <CustomInput
            id={"email"}
            type={"email"}
            label={"Email Address"}
            placeholder={"Enter a valid email address"}
          />
          <button
            type="submit"
            className="bg-primaryColor font-semibold p-4 text-white rounded-md ease-in-out duration-300 hover:bg-primaryColor-100"
          >
            Send password reset link
          </button>
        </form>
      </div>

      <AnimatePresence>
        {status === "success" && <ForgotStatus />}
      </AnimatePresence>
    </section>
  );
};

export default ForgotPassword;
