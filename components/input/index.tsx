"use client";
import React, { useRef } from "react";
import { revealPassword } from "@/utils/revealPassword";
import Image from "next/image";
import eye from "@/public/assets/auth/eyeIcon.svg";
import { twMerge } from "tailwind-merge";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isDisabled?: boolean;
  isEdited?: boolean;
}

const CustomInput = ({
  id,
  type,
  value,
  onChange,
  label,
  placeholder,
  isDisabled,
  isEdited
}: CustomInputProps) => {
  const Ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={twMerge(
        "relative text-secondaryColor-100 text-xs flex flex-col gap-y-1 lg:text-sm",
        isDisabled && "opacity-50"
      )}
    >
      <label htmlFor={id} className="text-secondaryColor-100 ">
        {label}
      </label>
      <input
        ref={Ref}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        className={twMerge(`text-[#B9BBBE] text-base border border-[#B9BBBE] py-2 px-3 rounded-md placeholder:text-[#B9BBBE] outline-[#B9BBBE] disabled:cursor-not-allowed lg:text-xs`, isEdited && 'text-secondaryColor-100')}
      />
      {type === "password" && (
        <Image
          onClick={() => revealPassword(Ref)}
          src={eye}
          alt="eye"
          className="absolute right-3 top-[30px] cursor-pointer z-[1] lg:top-[33px]"
        />
      )}
    </div>
  );
};

export default CustomInput;
