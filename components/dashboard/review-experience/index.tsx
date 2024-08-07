import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import plus from "@/public/assets/dashboard/plusIcon.svg";

const ExperienceReview = ({
  setCurrentIndex,
}: {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}) => {
  const handleAddExperience = () => {
    setCurrentIndex(2);
  };
  return (
    <>
      <div>ExperienceReview</div>
      <button
        onClick={handleAddExperience}
        className="mt-12 w-full flex items-center justify-center border border-[#B9BBBE] rounded-md py-4 gap-x-3 lg:max-w-[300px]"
      >
        <Image src={plus} alt="add icon" />
        <span className="text-xs text-secondaryColor-100 lg:text-sm">
          Add another institution or course
        </span>
      </button>
    </>
  );
};

export default ExperienceReview;
