"use client";
import React, { useState } from "react";
import Steps from "./Steps";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import hamburger from "@/public/assets/dashboard/hamburgerIcon.svg";
import close from "@/public/assets/dashboard/closeIcon.svg";

const Sidebar = () => {
  const [isToggle, setIsToggle] = useState(false);

  function expandAside() {
    setIsToggle(!isToggle);
  }

  return (
    <aside
      className={twMerge(
        "z-10 w-20 bg-[#1D0872] text-[#FAFAFA] flex flex-col gap-y-16 px-6 py-11 h-dvh transition-all  duration-700 ease-in-out lg:w-1/5 lg:items-center lg:px-8 lg:py-10 2xl:px-12",
        isToggle ? "w-full" : "w-20"
      )}
    >
      <div className="">
        <div className=" text-lg font-bold text-primary-100  absolute top-10 left-[90px] lg:text-[#FAFAFA] lg:text-xl lg:relative lg:top-0 lg:left-0">
          <span className="text-primary lg:text-[#D8CFFC]">Resume</span>
          Vantage.
        </div>
        <Image
          src={isToggle ? close : hamburger}
          alt="hamburger icon"
          onClick={expandAside}
          className="cursor-pointer lg:hidden"
        />
      </div>
      <ul className="flex flex-col text-sm gap-y-12 mt-16 lg:mt-0 lg:text-base 2xl:text-xl">
        <Steps title={"Your Header"} checked={true} isToggle={isToggle} />
        <Steps title={"Your Experience"} checked={false} isToggle={isToggle} />
        <Steps
          title={"Education History"}
          checked={false}
          isToggle={isToggle}
        />
        <Steps title={"Your Skills"} checked={false} isToggle={isToggle} />
        <Steps title={"Summary"} checked={false} isToggle={isToggle} />
        <Steps
          title={"Additional Details"}
          checked={false}
          isToggle={isToggle}
        />
        <Steps
          title={"Confirm"}
          checked={false}
          isToggle={isToggle}
          className="after:hidden"
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
