import Image from "next/image";
import { twMerge } from "tailwind-merge";
import removeIcon from "@/public/assets/dashboard/remove-01.svg";
import addIcon from "@/public/assets/dashboard/add-01.svg";

interface resultProps {
  result: string;
  isSelected: (result: string) => boolean;
  handleAddDescription: (result: string) => void;
}

const Result = ({ result, isSelected, handleAddDescription }: resultProps) => {
  const selected = isSelected(result);

  return (
    <div
      onClick={() => handleAddDescription(result)}
      className="flex items-center gap-x-2 p-4 bg-[#FAFAFA] w-full cursor-pointer  border border-[#B9BBBE]/65 rounded-sm lg:rounded-md  xl:p-5 xl:gap-x-6"
    >
      <div
        className={twMerge(
          "flex items-center justify-center self-center min-w-7 min-h-7  rounded-full ease-in-out duration-300 xl:min-w-10 xl:min-h-10",
          selected ? "bg-[#A5B4FC]" : "bg-[#FCD34D]"
        )}
      >
        <Image
          src={selected ? removeIcon : addIcon}
          alt="add Icon"
          className="w-fit"
        />
      </div>
      <p className=" text-[#40444B] text-xs md:text-sm">{result}</p>
    </div>
  );
};

export default Result;
