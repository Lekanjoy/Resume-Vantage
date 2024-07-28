"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import BrandName from "@/components/brand-name";
import CustomInput from "@/components/input";
import logo from "@/public/assets/auth/logo.svg";
import google from "@/public/assets/auth/googleIcon.svg";
import apple from "@/public/assets/auth/appleIcon.svg";
import spinner from "@/public/assets/auth/spinner.svg";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/hooks/useAxios";

const Login = () => {
  const { toast } = useToast();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      if (res.status !== 200) {
        setLoading(false);
        throw new Error();
      }
      setLoading(false);
      await login(res.data.payload.token);
      console.log(res);
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your login.",
      });
      console.error(error);
    }
  };

  return (
    <section className="px-6 py-8">
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
          Log in to <BrandName />
        </h1>
        <p className="text-xs text-secondaryColor lg:text-base">
          Log in to an existing account or{" "}
          <Link href="/auth/sign-up" className="text-primaryColor">
            create
          </Link>{" "}
          a new account
        </p>
      </div>

      <div className=" lg:mx-auto lg:max-w-[800px] lg:px-[100px]">
        <form
          action=""
          onSubmit={handleLogin}
          className="w-full flex flex-col gap-y-4"
        >
          <CustomInput
            id={"email"}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={"Email Address"}
            placeholder={"Enter a valid email address"}
          />
          <div className=" flex flex-col gap-y-2">
            <CustomInput
              id={"password"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
              placeholder={"Enter your password"}
            />
            <Link
              href="/auth/forgot-password"
              className="text-xs text-primaryColor text-right"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="flex  justify-center items-center gap-x-2 bg-primaryColor font-semibold p-4 text-white rounded-md ease-in-out duration-300 hover:bg-primaryColor-100"
            disabled={loading}
          >
            <span>Continue</span>
            {loading && (
              <Image src={spinner} alt="spinner" className="w-4 h-4" />
            )}
          </button>
        </form>
        <div className="mt-2 flex flex-col justify-center items-center text-xs text-[#72767D]">
          <div className="relative py-6 w-full text-center font-semibold before:absolute before:bottom-[30px] before:bg-[#B9BBBE] before:right-[20px]  before:h-[1px] after:absolute after:bottom-[30px] after:left-[20px]  after:h-[1px] after:bg-[#B9BBBE] before:w-[calc(50%-50px)] after:w-[calc(50%-50px)] lg:w-auto lg:before:w-[200px] lg:after:w-[200px]">
            or
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-[#4F545C] text-xs font-semibold lg:text-sm">
            Use any of your social accounts to continue
          </p>
          <button className="flex items-center justify-center gap-x-3 rounded-md bg-white p-4 border bordee-[#B9BBBE] w-full ease-in-out duration-300 focus:bg-black/10">
            <Image src={google} alt="google" className="w-8 h-8" />
            <span className="font-medium text-secondaryColor">
              Continue with Google
            </span>
          </button>
          <button className="flex items-center justify-center gap-x-3 rounded-md bg-white p-4 border bordee-[#B9BBBE] w-full ease-in-out duration-300 focus:bg-black/10">
            <Image src={apple} alt="apple" className="w-8 h-8" />
            <span className="font-medium text-secondaryColor">
              Continue with Apple
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
