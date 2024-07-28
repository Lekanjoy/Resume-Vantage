"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/input";
import logo from "@/public/assets/auth/logo.svg";
import { AnimatePresence } from "framer-motion";
import ResetStatus from "@/components/statusPages/ResetStatus";
import Link from "next/link";

export type statusState = "pending" | "success" | "failed";

const ResetPassword = () => {
  const [emailValue, setEmailValue] = useState("flourishralph@gmail.com");
  const [status, setStatus] = useState<statusState>("pending");

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
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
          <h1 className="text-lg font-semibold lg:text-5xl">Reset Password?</h1>
          <p className="text-xs text-[#392467] text-center lg:w-2/4 lg:text-secondaryColor lg:text-base">
            Enter in a new password for{" "}
            <span className="text-primaryColor">{emailValue}</span>
          </p>
        </div>

        <form onSubmit={handleReset} className="w-full flex flex-col gap-y-4">
          <CustomInput
            id={"password"}
            type={"password"}
            label={"Password"}
            placeholder={"Enter your new password"}
          />
          <CustomInput
            id={"passwordConfirm"}
            type={"password"}
            label={"Confirm New Password"}
            placeholder={"Confirm your new password"}
          />
          <button
            type="submit"
            className="bg-primaryColor font-semibold p-4 text-white rounded-md ease-in-out duration-300 hover:bg-primaryColor-100"
          >
            Reset password
          </button>
        </form>
      </div>

      <AnimatePresence>
        {status === "success" && <ResetStatus />}
      </AnimatePresence>
    </section>
  );
};

export default ResetPassword;
