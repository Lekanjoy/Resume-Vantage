import { useMemo, useState } from "react";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { addResponsibilitiesAction } from "@/app/actions/addResponsiblilities";
import { useToast } from "@/components/toast/ShowToast";
import Button, { ButtonProps as DescriptionProps } from "../button";
import SearchBox from "./SearchBox";
import RichTextEditor from "../editor";
import Toast from "@/components/toast";
import {
  toggleDescriptionInCurrentExperience,
  updateExperience,
} from "@/features/resumeSlice";

const ExperienceDescription = ({
  currentIndex,
  handlePrev,
  handleNext,
}: DescriptionProps) => {
  const dispatch = useAppDispatch();
  const { showToast, toastState } = useToast();
  const experiences = useTypedSelector((store) => store.resume.experience);
  const currentEditingIndex = useTypedSelector(
    (state) => state.resume.currentEditingIndex
  );
  const role =
    currentEditingIndex !== null
      ? experiences[currentEditingIndex].jobTitle
      : "Product Designer";
  const [loading, setLoading] = useState(false);
  const resumeId = useTypedSelector((store) => store.resume.resumeId);
  const jobExperienceId = experiences[currentEditingIndex!]._id;
  const userResponsibilities =
    experiences[currentEditingIndex!]?.responsibilities?.responsibilities;

  async function handleAddResponsibilities() {
    setLoading(true);
    const responsibilitiesInput = {
      resumeId,
      jobExperienceId,
      userResponsibilities,
    };

    const result = await addResponsibilitiesAction(responsibilitiesInput);
    if (result.success) {
      showToast("Responsibilities added", "success");
      handleNext();
      setLoading(false);
    } else {
      setLoading(false);
      showToast(result.error, "error");    
      console.error(result.error);
    }
  }
  // Responsibilities to display based on subscription status
  const isPaidUser = false;
  const resultData = useTypedSelector((store) => store.suggestions);
  const rawExperienceSuggestions =
    experiences[currentEditingIndex!]?.rawResponsibilities?.responsibilities;

  const AISuggestions =
    resultData.length < 1 ? rawExperienceSuggestions : resultData;
  const displayedResults = isPaidUser
    ? AISuggestions
    : AISuggestions?.slice(0, 4);

  // Check if responsibilities is selected or not
  const isSelected = useMemo(() => {
    return (result: string) => {
      if (currentEditingIndex !== null && experiences[currentEditingIndex]) {
        return experiences[
          currentEditingIndex
        ].responsibilities?.responsibilities?.includes(result);
      }
      return false;
    };
  }, [experiences, currentEditingIndex]);

  // Add or remove responsibilities
  const handleAddDescription = (result: string) => {
    dispatch(toggleDescriptionInCurrentExperience(result));
  };

  // Editor content
  if (currentEditingIndex === null) return null;
  const currentExperience = experiences[currentEditingIndex];
  const responsibilities =
    currentExperience.responsibilities?.responsibilities || [];

  const handleUpdate = (newContent: string[]) => {
    const updatedExperience = {
      ...currentExperience,
      responsibilities: {
        responsibilities: newContent,
      },
    };
    dispatch(updateExperience({ experience: updatedExperience }));
  };
  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-12">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Describe what you did as a {role}
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Pick from our AI-recommended phrases below or create yours.
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
        <RichTextEditor
          initialContent={responsibilities}
          onUpdate={handleUpdate}
        />
      </div>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleAddResponsibilities}
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

export default ExperienceDescription;
