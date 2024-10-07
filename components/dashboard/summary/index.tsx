import React, { useState } from "react";
import Button, { ButtonProps as SkillsProps } from "../button";
import SearchBox from "../describe-experience/SearchBox";
import RichTextEditor from "../editor";
import Toast from "@/components/toast";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { useToast } from "@/components/toast/ShowToast";
import { updateSummary } from "@/features/resumeSlice";
import { createCareerSummary } from "@/app/actions/summaryAction";

const Summary = ({ currentIndex, handlePrev, handleNext }: SkillsProps) => {
  const dispatch = useAppDispatch();
  const { showToast, toastState } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    title: role,
    careerSummary,
    rawCareerSummary,
    resumeId,
  } = useTypedSelector((store) => store.resume);

  // Summary to display based on subscription status
  const isPaidUser = false;
  const resultData = useTypedSelector((store) => store.summarySuggestions);
  const AISuggestions = resultData.length < 1 ? rawCareerSummary : resultData;
  const displayedResults = isPaidUser
    ? AISuggestions
    : AISuggestions?.slice(0, 4);

    const handleUpdate = (newSummary: string ) => {
      dispatch(updateSummary(newSummary));
    };
  
    const isSelected = (result: string) => {
      return careerSummary?.includes(result);
    };
  
    const handleAddDescription = (result: string) => {
      if (isSelected(result)) {
        // If the result is already in the summary, remove it
        const newSummary = careerSummary.replace(result, '').trim();
        dispatch(updateSummary(newSummary));
      } else {
        // If the result is not in the summary, add it
        const newSummary = careerSummary ? `${careerSummary} ${result}` : result;
        dispatch(updateSummary(newSummary));
      }
    };

  // Add Summary to Database
  const handleAddSummary = async () => {
    setLoading(true);
    const input = {
      resumeId,
      careerSummary: careerSummary,
    };

    const result = await createCareerSummary(input);
    if (result.success) {
      setLoading(false);
      showToast("Summary created", "success");
      setTimeout(() => {
        handleNext();
      }, 3000);
    } else {
      setLoading(false);
      showToast("Summary creation failed!", "success");
      console.error(result.error);
    }
  };
  
  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-12">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
        Let’s wrap this up with a strong summary
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
        You’re almost done! Express yourself in your summary.
        </p>
      </div>

      <div className="w-full flex justify-between flex-col gap-y-10 lg:flex-row lg:gap-x-5 xl:gap-x-8">
        <SearchBox
          role={role}
          AISuggestions={AISuggestions}
          displayedResults={displayedResults}
          isSelected={isSelected}
          handleAddDescription={handleAddDescription}
        />
        <RichTextEditor<string> initialContent={careerSummary} onUpdate={handleUpdate} isList={false}/>
      </div>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleAddSummary}
          handlePrev={handlePrev}
          loading={loading}
        />
      </div>
      <Toast
        message={toastState.message}
        variant={toastState.variant}
        isVisible={toastState.visible}
      />
    </>
  );
};

export default Summary;
