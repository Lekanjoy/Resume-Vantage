import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { setCurrentEditingIndex } from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import Button, { ButtonProps } from "../button";
import ResumePreview1 from "@/components/resume-preview-1";
import plus from "@/public/assets/dashboard/plusIcon.svg";
import deleteIcon from "@/public/assets/dashboard/delete.svg";
import editIcon from "@/public/assets/dashboard/edit.svg";
import { getSkillsSuggestions } from "@/app/actions/skillsAction";
import { updateSkillsSuggestions } from "@/features/SkillsSuggestionSlice";
import Preview from "../Preview";

export interface ExperienceReviewProps extends ButtonProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  onEditEducation: () => void;
}

const EducationReview = ({
  currentIndex,
  handlePrev,
  handleNext,
  setCurrentIndex,
  onEditEducation,
}: ExperienceReviewProps) => {
  const dispatch = useAppDispatch();
  const education = useTypedSelector((state) => state.resume.education);
  const [loading, setLoading] = useState(false);
  const resumeId = useTypedSelector((store) => store.resume.resumeId);

  const handleAddEducation = () => {
    setCurrentIndex(5);
    dispatch(setCurrentEditingIndex(null));
  };

  const handleEditEducation = (index: number) => {
    dispatch(setCurrentEditingIndex(index));
    onEditEducation();
  };

  const handleSkillSuggestions = async () => {
    setLoading(true);
    const input = {
      resumeId,
    };

    const result = await getSkillsSuggestions(input);
    if (result.success) {
      setLoading(false);
      dispatch(updateSkillsSuggestions(result.data?.payload?.rawSkills));
      handleNext();
    } else {
      setLoading(false);
      console.error(result.error);
    }
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-12">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Review your education
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Go over your education to see if there’s anything you would like to
          add or remove.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-12 lg:flex-row  lg:gap-x-10 lg:justify-between">
        <div className="flex flex-col flex-shrink-0 gap-y-2 lg:gap-y-4 lg:w-[70%]">
          {education.map((edu, index) => (
            <div
              key={edu._id}
              className="w-full flex flex-col gap-y-3 bg-[#F7F5FE] py-4 px-4 text-secondaryColor-100 rounded-md border border-[#B9BBBE] h-fit lg:gap-y-1 xl:p-6 2xl:p-8"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-[2px]">
                  <h3 className="text-sm font-semibold lg:text-base">
                    {edu.degreeType} in {edu.studyField}
                  </h3>
                  <p className="text-xs">
                    {edu.schoolName}, {edu.schoolLocation}
                  </p>
                  <p className="text-xs">
                    {edu.startDate} {edu.stillEnrolled ? "-" : ""}{" "}
                    {edu.gradDate}
                  </p>
                </div>
                <div className="flex gap-x-3 items-center cursor-pointer xl:gap-x-6">
                  <Image
                    src={editIcon}
                    alt="edit Icon"
                    onClick={() => handleEditEducation(index)}
                    className="w-[12px] h-[12px] lg:w-full lg:h-full"
                  />
                  <Image
                    src={deleteIcon}
                    alt="delete Icon"
                    className="w-[12px] h-[12px] lg:w-full lg:h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Preview/>
      </div>
      <button
        onClick={handleAddEducation}
        className="mt-12 w-full flex items-center justify-center border border-[#B9BBBE] rounded-md py-4 gap-x-3 lg:max-w-[300px]"
      >
        <Image src={plus} alt="add icon" />
        <span className="text-xs text-secondaryColor-100 lg:text-sm">
          Add another education
        </span>
      </button>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleSkillSuggestions}
          handlePrev={handlePrev}
          loading={loading}
        />
      </div>
    </>
  );
};

export default EducationReview;
