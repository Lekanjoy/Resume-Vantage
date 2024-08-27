"use client";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { statusState } from "../reset-password/page";
import { AnimatePresence } from "framer-motion";
import { recoverPassword } from "@/app/actions/auth";
import CustomInput from "@/components/input";
import ForgotStatus from "@/components/statusPages/ForgotStatus";
import spinner from "@/public/assets/auth/spinner.svg";
import logo from "@/public/assets/auth/logo.svg";
import Toast from "@/components/toast";
import { useToast } from "@/components/toast/ShowToast";

const ForgotPassword = () => {
  const { showToast, toastState } = useToast();
  const [status, setStatus] = useState<statusState | null>(null);
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("pending");

    const res = await recoverPassword(email)
    if (res.success) {
      setStatus("success");
    } else {
      setStatus("failed");
      showToast(res.error, "error");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Enter a valid email address"}
            required
          />
          <button
            type="submit"
            className="flex  justify-center items-center gap-x-2 bg-primaryColor font-semibold p-4 text-white rounded-md ease-in-out duration-300 hover:bg-primaryColor-100 disabled:cursor-not-allowed"
            disabled={status === "pending"}
          >
            <span>Send password reset link</span>
            {status === "pending" && (
              <Image src={spinner} alt="spinner" className="w-4 h-4" />
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {status === "success" && <ForgotStatus email={email} />}
      </AnimatePresence>

      <Toast
        message={toastState.message}
        variant={toastState.variant}
        isVisible={toastState.visible}
      />
    </section>
  );
};

export default ForgotPassword;
