"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Steps from "./Steps";
import hamburger from "@/public/assets/dashboard/hamburgerIcon.svg";
import close from "@/public/assets/dashboard/closeIcon.svg";

interface sidebarProps {
  steps: {
    title: string;
    checked: boolean;
  }[];
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ steps, isToggle, setIsToggle }: sidebarProps) => {
  function expandAside() {
    setIsToggle(!isToggle);
  }

  return (
    <aside
      className={twMerge(
        "fixed z-10 w-20 bg-[#1D0872] text-[#FAFAFA] flex flex-col gap-y-8 px-6 py-11 h-dvh transition-all  duration-700 ease-in-out sm:gap-x-16 lg:w-1/5 lg:items-center lg:px-8 lg:py-10 2xl:px-12",
        isToggle ? "w-full" : "w-20"
      )}
    >
      <div className="">
        <Link href='/' className=" text-lg font-bold text-primaryColor-100  absolute top-10 left-[90px] lg:text-[#FAFAFA] lg:text-xl lg:relative lg:top-0 lg:left-0">
          <span className="text-primaryColor lg:text-[#D8CFFC]">Resume</span>
          Vantage.
        </Link>
        <Image
          src={isToggle ? close : hamburger}
          alt="hamburger icon"
          onClick={expandAside}
          className="cursor-pointer lg:hidden"
        />
      </div>
      <ul className="flex flex-col text-sm gap-y-12 mt-16 lg:mt-0 lg:text-base 2xl:text-xl">
        {steps.map((step, index) => (
          <Steps
            key={index}
            title={step.title}
            checked={step.checked}
            isToggle={isToggle}
            className={`
              ${index === steps.length - 1 ? "after:hidden" : ""}
              ${index === 0 || index === 3 || index === 4 || index === 6 ? "hidden" : ""}
            `.trim()}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
