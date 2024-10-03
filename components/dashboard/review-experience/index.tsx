import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { setCurrentEditingIndex } from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import Button, { ButtonProps } from "../button";
import ResumePreview from "@/components/resume-preview";
import plus from "@/public/assets/dashboard/plusIcon.svg";
import deleteIcon from "@/public/assets/dashboard/delete.svg";
import editIcon from "@/public/assets/dashboard/edit.svg";

export interface ExperienceReviewProps extends ButtonProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  onEditExperience: () => void;
}

const ExperienceReview = ({
  currentIndex,
  handlePrev,
  handleNext,
  setCurrentIndex,
  onEditExperience,
}: ExperienceReviewProps) => {
  const dispatch = useAppDispatch();
  const experiences = useTypedSelector((state) => state.resume.experience);

  const handleAddExperience = () => {
    setCurrentIndex(2);
    dispatch(setCurrentEditingIndex(null));
  };

  const handleEditExperience = (index: number) => {
    dispatch(setCurrentEditingIndex(index));
    onEditExperience();
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-12">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Review your experience
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Go over your job experience to see if there’s anything you would like
          to add or remove.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-12 lg:flex-row  lg:gap-x-10 lg:justify-between">
        <div className="flex flex-col flex-shrink-0 gap-y-2 lg:gap-y-4 lg:grid lg:w-[70%]">
          {experiences.map((experience, index) => (
            <div
              key={experience._id}
              className="w-full flex flex-col gap-y-3 bg-[#F7F5FE] py-4 px-4 text-secondaryColor-100 rounded-md border border-[#B9BBBE] lg:gap-y-4 xl:p-6 2xl:p-8"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-[2px]">
                  <h3 className="text-sm font-semibold lg:text-base">
                    {experience.jobTitle} at {experience.company}
                  </h3>
                  <p className="text-xs">{`${experience.startDate} - ${experience.endDate}`}</p>
                </div>
                <div className="flex gap-x-3 items-center cursor-pointer xl:gap-x-6">
                  <Image
                    src={editIcon}
                    alt="edit Icon"
                    onClick={() => handleEditExperience(index)}
                    className="w-[12px] h-[12px] lg:w-full lg:h-full"
                  />
                  <Image
                    src={deleteIcon}
                    alt="delete Icon"
                    className="w-[12px] h-[12px] lg:w-full lg:h-full"
                  />
                </div>
              </div>
              <div>
                <ul className="flex flex-col text-xs gap-y-[10px] pl-1 md:gap-y-3 xl:gap-y-4 list-disc list-inside">
                  {experience?.responsibilities?.responsibilities?.map(
                    (desc) => (
                      <li key={desc}>{desc}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full min-h-full flex justify-center items-center  lg:w-[30%] lg:block">
          <ResumePreview />
        </div>
      </div>
      <button
        onClick={handleAddExperience}
        className="mt-12 w-full flex items-center justify-center border border-[#B9BBBE] rounded-md py-4 gap-x-3 lg:max-w-[300px]"
      >
        <Image src={plus} alt="add icon" />
        <span className="text-xs text-secondaryColor-100 lg:text-sm">
          Add another experience
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
