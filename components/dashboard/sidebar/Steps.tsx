import React from "react";
import { twMerge } from "tailwind-merge";

interface StepsProps extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  checked: boolean;
  isToggle: boolean;
}

const Steps = ({ title, checked, isToggle, className }: StepsProps) => {
  return (
    <li className={twMerge("flex gap-x-3 items-center", className)}>
      <span
        className={twMerge(
          "relative min-w-5 min-h-5 rounded-full border border-[#FAFAFA] xl:w-8 xl:h-8 after:absolute after:w-[2px] after:h-[28px] after:bg-[#FAFAFA] after:-bottom-10 after:left-2 xl:after:left-3",
          className
        )}
      >
        {checked && (
          <span className="absolute top-[42%] left-[35%] -rotate-[10deg] bg-[#FAFAFA] w-[1px] h-[6px] lg:left-[40%] before:absolute before:left-[4px] before:rotate-[40deg] before:-bottom-[1px] before:w-[1px] before:h-[10px] before:bg-[#FAFAFA] "></span>
        )}
      </span>
      <span
        className={twMerge(
          "hidden transition-all duration-1000 whitespace-nowrap lg:block",
          isToggle ? "block" : "hidden"
        )}
      >
        {title}
      </span>
    </li>
  );
};

export default Steps;
