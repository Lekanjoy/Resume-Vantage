import Image from "next/image";
import addIcon from "@/public/assets/dashboard/add-01.svg";
import removeIcon from "@/public/assets/dashboard/remove-01.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import { selectedResult } from ".";

interface resultProps {
  result: selectedResult;
  setIsSelectedResults:  Dispatch<SetStateAction<selectedResult[]>>;
}

const Result = ({ result, setIsSelectedResults }: resultProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
    setIsSelectedResults(prevResults => {
      const resultExists = prevResults.some(item => item.id === result.id);
      if (resultExists) {
        // If the result is already in the array, remove it
        return prevResults.filter(item => item.id !== result.id);
      } else {
        // If the result is not in the array, add it
        return [...prevResults, { id: result.id, text: result.text }];
      }
    });
  };


  return (
    <div
      onClick={handleSelected}
      className="flex justify-between gap-x-2 p-4 bg-[#FAFAFA] w-full cursor-pointer  border border-[#B9BBBE]/65 rounded-sm lg:rounded-md  xl:p-5 xl:gap-x-6"
    >
      <div
        className={twMerge(
          "flex items-center justify-center self-center min-w-7 min-h-7  rounded-full ease-in-out duration-300 xl:min-w-10 xl:min-h-10",
          isSelected ? "bg-[#A5B4FC]" : "bg-[#FCD34D]"
        )}
      >
        <Image
          src={isSelected ? removeIcon : addIcon}
          alt="add Icon"
          className="w-fit"
        />
      </div>
      <p className=" text-[#40444B] text-xs md:text-sm">{result.text}</p>
    </div>
  );
};

export default Result;
