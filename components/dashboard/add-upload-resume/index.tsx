"use client";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import check from "@/public/assets/dashboard/checkmark.svg";

interface cardProps {
  title: string;
  text: string;
  img: StaticImageData;
  isChecked: boolean;
  onClick: () => void;
}

const AddOrUploadCard = ({
  title,
  text,
  img,
  isChecked,
  onClick,
}: cardProps) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "relative bg-white w-full min-h-[120px] border rounded-lg p-6 flex gap-x-5 items-center cursor-pointer lg:p-8",
        isChecked ? "border-primaryColor bg-[#F7F5FE]" : "border-[#A3A3A3]"
      )}
    >
      <div className="w-8 h-8 lg:w-12 lg:h-12">
        <Image src={img} alt={title} className="w-full h-full aspect-square" />
      </div>
      <div className="flex flex-col max-w-[180px] lg:gap-y-1 lg:max-w-[280px]">
        <p className="font-semibold text-sm text-secondaryColor lg:text-2xl">
          {title}
        </p>
        <p className="text-xs text-secondaryColor-100 lg:text-base">{text}</p>
      </div>
      {isChecked && (
        <div className="w-4 h-4 absolute top-3 right-3">
          <Image
            src={check}
            alt="Check mark"
            className="w-full h-full aspect-square"
          />
        </div>
      )}
    </div>
  );
};

export default AddOrUploadCard;
