import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Button, { ButtonProps } from "../button";
import plus from "@/public/assets/dashboard/plusIcon.svg";

export interface ExperienceReviewProps extends ButtonProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const ExperienceReview = ({
  currentIndex,
  handlePrev,
  handleNext,
  setCurrentIndex,
}: ExperienceReviewProps) => {
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
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
};

export default ExperienceReview;
