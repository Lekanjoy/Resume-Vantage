import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BrandNameProps {
  className?: string;
}

const BrandName = ({ className }: BrandNameProps) => {
  return (
    <Link href="/"
      className={cn(
        "text-lg leading-[24px] lg:text-5xl lg:leading-[60px] 2xl:text-7xl 2xl:leading-[96px]",
        className
      )}
    >
      <span className="font-semibold text-primaryColor-100">Resume</span>
      <span className="text-primaryColor font-bold ">Vantage.</span>
    </Link>
  );
};

export default BrandName;
