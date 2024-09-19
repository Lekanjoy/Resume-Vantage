import { useState } from "react";
import { useTypedSelector } from "@/store/store";
import { addResponsibilitiesAction } from "@/app/actions/addResponsiblilities";
import { useToast } from "@/components/toast/ShowToast";
import Button, { ButtonProps as DescriptionProps } from "../button";
import SearchBox from "./SearchBox";
import RichTextEditor from "../editor";
import Toast from "@/components/toast";

const ExperienceDescription = ({
  currentIndex,
  handlePrev,
  handleNext,
}: DescriptionProps) => {
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
        <SearchBox role={role} />
        <RichTextEditor />
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
