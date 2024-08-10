"use client";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { updatePassword } from "@/app/actions/auth";
import ResetStatus from "@/components/statusPages/ResetStatus";
import CustomInput from "@/components/input";
import logo from "@/public/assets/auth/logo.svg";
import spinner from "@/public/assets/auth/spinner.svg";
import { statusState } from "./page";

const ResetContent = () => {
  const { toast } = useToast();
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [status, setStatus] = useState<statusState | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const email = searchParams.get("email");
    if (email) {
      setEmailValue(email);
    }
  }, [router, searchParams]);

  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if Passwords match
    const trimmedPassword = password.trim();
    const trimmedPasswordConfirm = passwordConfirm.trim();

    if (trimmedPassword !== trimmedPasswordConfirm) {
      toast({
        variant: "destructive",
        description: "Passwords do not match",
      });
      return;
    }

    setStatus("pending");
    const res = await updatePassword(emailValue, password);
    if (res.success) {
      setStatus("success");
    } else {
      setStatus("failed");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res.error,
      });
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            placeholder={"Enter your new password"}
          />
          <CustomInput
            id={"passwordConfirm"}
            type={"password"}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            label={"Confirm New Password"}
            placeholder={"Confirm your new password"}
          />
          <button
            type="submit"
            className="flex  justify-center items-center gap-x-2 bg-primaryColor font-semibold p-4 text-white rounded-md ease-in-out duration-300 hover:bg-primaryColor-100 disabled:cursor-not-allowed"
            disabled={status === "pending"}
          >
            <span>Reset password </span>
            {status === "pending" && (
              <Image src={spinner} alt="spinner" className="w-4 h-4" />
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {status === "success" && <ResetStatus />}
      </AnimatePresence>
    </section>
  );
};

export default ResetContent;
