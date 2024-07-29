"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { statusState } from "../reset-password/page";
import { useToast } from "@/components/ui/use-toast";
import BrandName from "@/components/brand-name";
import CustomInput from "@/components/input";
import logo from "@/public/assets/auth/logo.svg";
import google from "@/public/assets/auth/googleIcon.svg";
import apple from "@/public/assets/auth/appleIcon.svg";
import SignUpStatus from "@/components/statusPages/SignUpStatus";
import spinner from "@/public/assets/auth/spinner.svg";
import spinnerBlue from "@/public/assets/auth/spinnerBlue.svg";
import axios from "axios";

// Load baseUrl from .env file
const baseURL = process.env.BASE_URL as string;

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<statusState | null>(null);

  const router = useRouter();
  const { toast } = useToast();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("pending");
    try {
      const res = await axios.post(`${baseURL}/auth/register`, {
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        email,
        password,
      });
      if (res.status !== 201) {
        setStatus("failed");
        throw new Error();
      }
      setStatus("success");
    } catch (error) {
      setStatus("failed");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your registration.",
      });
      console.error(error);
    }
  };

  const handleGoogleAuth = async () => {
    setStatus("pending");
    try {
      const res = await axios.get(`${baseURL}/auth/google/onboard`);
      setStatus(null);
      router.push(res.data.payload.redirect);
    } catch (error) {
      console.error(error);
      setStatus("failed");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your registration.",
      });
    }
  };

  return (
    <section className="relative px-6 py-8">
      <div className="mb-14 w-[131px] lg:mb-20 lg:w-[200px]">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            className="w-full h-full relative z-20"
          />
        </Link>
      </div>
      <div className="w-full flex flex-col items-center text-secondaryColor mb-6">
        <h1 className="text-lg font-semibold lg:text-5xl">
          Welcome to <BrandName />
        </h1>
        <p className="text-xs text-secondaryColor lg:text-base">
          Create a new account or{" "}
          <Link href="/auth/login" className="text-primaryColor">
            log in
          </Link>{" "}
          to an existing account
        </p>
      </div>

      <div className=" lg:mx-auto lg:max-w-[800px] lg:px-[100px]">
        <form onSubmit={handleSignup} className="w-full flex flex-col gap-y-4">
          <CustomInput
            id={"firstName"}
            type={"text"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label={"First Name"}
            placeholder={"Enter your first name"}
          />
          <CustomInput
            id={"lastName"}
            type={"text"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label={"Last Name"}
            placeholder={"Enter your last name"}
          />
          <CustomInput
            id={"email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={"Email Address"}
            placeholder={"Enter a valid email address"}
          />
          <CustomInput
            id={"password"}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            placeholder={"Enter your password"}
          />
          <button
            type="submit"
            className="flex  justify-center items-center gap-x-2 bg-primaryColor font-semibold p-4 text-white rounded-md ease-in-out duration-300 hover:bg-primaryColor-100"
            disabled={status === "pending"}
          >
            <span>Continue</span>
            {status === "pending" && (
              <Image src={spinner} alt="spinner" className="w-4 h-4" />
            )}
          </button>
        </form>
        <div className="mt-2 flex flex-col justify-center items-center text-xs text-[#72767D]">
          <p>
            By registering you agree to our{" "}
            <span className="text-primaryColor">Terms of Service</span> and{" "}
            <span className="text-primaryColor">Privacy Policy</span>
          </p>
          <div className="relative py-6 w-full text-center font-semibold before:absolute before:bottom-[30px] before:bg-[#B9BBBE] before:right-[20px]  before:h-[1px] after:absolute after:bottom-[30px] after:left-[20px]  after:h-[1px] after:bg-[#B9BBBE] before:w-[calc(50%-50px)] after:w-[calc(50%-50px)] lg:w-auto lg:before:w-[200px] lg:after:w-[200px]">
            or
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-[#4F545C] text-xs font-semibold lg:text-sm">
            Use any of your social accounts to continue
          </p>
          <button
            onClick={handleGoogleAuth}
            disabled={status === "pending"}
            className="flex items-center justify-center gap-x-3 rounded-md bg-white p-4 border border-[#B9BBBE] w-full ease-in-out duration-300 hover:bg-black/10"
          >
            <Image src={google} alt="google" className="w-8 h-8" />
            <span className="font-medium text-secondaryColor">
              Continue with Google
            </span>
            {status === "pending" && (
              <Image src={spinnerBlue} alt="spinner" className="w-4 h-4" />
            )}
          </button>
          <button className="flex items-center justify-center gap-x-3 rounded-md bg-white p-4 border border-[#B9BBBE] w-full ease-in-out duration-300 hover:bg-black/10">
            <Image src={apple} alt="apple" className="w-8 h-8" />
            <span className="font-medium text-secondaryColor">
              Continue with Apple
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {status === "success" && <SignUpStatus email={email} />}
      </AnimatePresence>
    </section>
  );
};

export default SignUp;
