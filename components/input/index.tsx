"use client";
import React, { useRef } from "react";
import Image from "next/image";
import eye from "@/public/assets/auth/eyeIcon.svg";
import { revealPassword } from "@/utils/revealPassword";

interface CustomInputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

const CustomInput = ({ id, type, label, placeholder }: CustomInputProps) => {
  const Ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative text-secondary-100 text-xs flex flex-col gap-y-1 lg:text-sm">
      <label htmlFor={id} className="text-secondary-100 ">
        {label}
      </label>
      <input
        ref={Ref}
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-[#B9BBBE] py-2 px-3 rounded-md placeholder:text-[#B9BBBE] outline-[#B9BBBE]"
      />
      {type === "password" && (
        <Image
          onClick={() => revealPassword(Ref)}
          src={eye}
          alt="eye"
          className="absolute right-3 top-[27px] cursor-pointer z-[1] lg:top-[33px]"
        />
      )}
    </div>
  );
};

export default CustomInput;
