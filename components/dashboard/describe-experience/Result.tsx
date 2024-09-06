import Image from "next/image";
import addIcon from "@/public/assets/dashboard/add-01.svg";
import removeIcon from "@/public/assets/dashboard/remove-01.svg";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { toggleDescriptionInCurrentExperience } from "@/features/resumeSlice";
import { useTypedSelector, useAppDispatch } from "@/store/store";

interface resultProps {
  result: string;
}

const Result = ({ result }: resultProps) => {
  const dispatch = useAppDispatch();
  const experiences = useTypedSelector((state) => state.resume.experience);
  const currentEditingIndex = useTypedSelector(
    (state) => state.resume.currentEditingIndex
  );

  const isSelected = useMemo(() => {
    if (currentEditingIndex !== null && experiences[currentEditingIndex]) {
      return experiences[currentEditingIndex].description?.includes(
        result
      );
    }
    return false;
  }, [experiences, currentEditingIndex, result]);

  const handleAddDescription = () => {
    dispatch(toggleDescriptionInCurrentExperience(result));    
  };

  return (
    <div
      onClick={handleAddDescription}
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
      <p className=" text-[#40444B] text-xs md:text-sm">{result}</p>
    </div>
  );
};

export default Result;
