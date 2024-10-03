import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import CustomInput from "@/components/input";
import ResumePreview from "@/components/resume-preview";
import Button, { ButtonProps as ExperienceProps } from "../button";
import {
  addExperience,
  Experience,
  fetchResumeData,
  setCurrentEditingIndex,
  updateExperience,
} from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { createResumeExperience } from "@/app/actions/createResume";
import { useToast } from "@/components/toast/ShowToast";
import Toast from "@/components/toast";
import { useSearchParams } from "next/navigation";
import { updateSuggestions } from "@/features/AISuggestionsSlice";

export interface ExtendedExperienceProps extends ExperienceProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  id: string | string[] | undefined;
}

const Experiences = ({
  currentIndex,
  setCurrentIndex,
  handleNext,
  handlePrev,
  id,
}: ExtendedExperienceProps) => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { showToast, toastState } = useToast();
  const experiences = useTypedSelector((store) => store.resume.experience);
  const resumeId = useTypedSelector((state) => state.resume.resumeId);
  const currentEditingIndex = useTypedSelector(
    (state) => state.resume.currentEditingIndex
  );
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    _id: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    city: "",
    country: "",
    responsibilities: { responsibilities: [] },
    rawResponsibilities: { responsibilities: [] },
  });

  const editing = searchParams.get("editing") as string;
  const toBoolean =
    sessionStorage.getItem("hasNavigatedToExperiences") === "true"
      ? true
      : false;
  const [hasNavigated, setHasNavigated] = useState(toBoolean);

  useEffect(() => {
    const isEditing = editing === "true";
    if (isEditing && !hasNavigated) {
      setCurrentIndex(4);
      setHasNavigated(true);
      // Store the navigation state in sessionStorage
      sessionStorage.setItem("hasNavigatedToExperiences", "true");
    } else if (!isEditing) {
      // Clear the navigation state when not editing
      sessionStorage.removeItem("hasNavigatedToExperiences");
      setHasNavigated(false);
    }
  }, [editing, setCurrentIndex, hasNavigated]);

  useEffect(() => {
    const today = new Date();
    const todayDate = today.toISOString().split("T")[0];
    if (currentEditingIndex !== null && experiences[currentEditingIndex]) {
      setCurrentExperience(experiences[currentEditingIndex]);
      setIsChecked(experiences[currentEditingIndex].endDate === "Present");
    } else {
      setCurrentExperience({
        _id: "",
        jobTitle: "",
        company: "",
        startDate: todayDate,
        endDate: todayDate,
        city: "",
        country: "",
        responsibilities: { responsibilities: [] },
        rawResponsibilities: { responsibilities: [] },
      });
      setIsChecked(false);
    }
    showToast("Your resume was saved a minute ago", "success");
  }, [currentEditingIndex, experiences, showToast]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const endDate = event.target.checked
      ? "Present"
      : currentExperience.endDate;
    setCurrentExperience((prev) => ({
      ...prev,
      endDate,
    }));
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentExperience((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmitExperience = async () => {
    setLoading(true);
    const experienceInput = {
      resumeId,
      jobTitle: currentExperience.jobTitle,
      company: currentExperience.company,
      city: currentExperience.city,
      country: currentExperience.country,
      startDate: currentExperience.startDate,
      endDate: currentExperience.endDate,
      currentlyWorking: isChecked,
    };

    const result = await createResumeExperience(experienceInput);

    if (result.success) {
      if (currentEditingIndex !== null) {
        const experienceToUpdate = {
          ...currentExperience,
          responsibilities: currentExperience.responsibilities || {
            responsibilities: [],
          },
        };
        dispatch(updateExperience({ experience: experienceToUpdate }));
      } else {
        const newExperience = {
          ...currentExperience,
          responsibilities: currentExperience.responsibilities || {
            responsibilities: [],
          },
        };
        dispatch(addExperience(newExperience));
        dispatch(setCurrentEditingIndex(experiences.length));
      }
      dispatch(
        updateSuggestions(result.data?.payload?.responsiblitiesRecommendations)
      );
      dispatch(fetchResumeData(id as string));
      showToast("Experience created successfully", "success");
      handleNext();
      setLoading(false);
    } else {
      setLoading(false);
      showToast(result.error, "error");
      console.error("Failed to create experience:", result.error);
    }
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-14">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Now, Let us include your experience
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Enter details about your most recent job.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-12 lg:flex-row  lg:gap-x-10 lg:justify-between">
        <form
          action=""
          className="flex flex-col flex-shrink-0 gap-y-6 lg:grid lg:w-[70%] lg:grid-cols-2 lg:gap-x-8"
        >
          <CustomInput
            id="jobTitle"
            type="text"
            label="Job Title"
            placeholder="Product Designer"
            value={currentExperience.jobTitle}
            onChange={handleInputChange("jobTitle")}
          />
          <CustomInput
            id="company"
            type="text"
            label="Company"
            placeholder="Microsoft"
            value={currentExperience.company}
            onChange={handleInputChange("company")}
          />
          <CustomInput
            id="city"
            type="text"
            label="City"
            placeholder="London"
            value={currentExperience.city}
            onChange={handleInputChange("city")}
          />
          <CustomInput
            id="country"
            type="text"
            label="Country"
            placeholder="United Kingdom"
            value={currentExperience.country}
            onChange={handleInputChange("country")}
          />
          <CustomInput
            id="startDate"
            type="date"
            label="Start Date"
            value={currentExperience.startDate}
            onChange={handleInputChange("startDate")}
          />
          <CustomInput
            id="endDate"
            type={isChecked ? "text" : "date"}
            label="End Date"
            value={currentExperience.endDate}
            onChange={handleInputChange("endDate")}
            isDisabled={isChecked}
          />
          <div className="flex items-center gap-x-4">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="checkbox"
              className="text-xs text-secondaryColor-100 lg:text-sm"
            >
              I currently work here
            </label>
          </div>
        </form>
        <div className="w-full min-h-full flex justify-center items-center  lg:w-[30%] lg:block">
            <ResumePreview />
          </div>
      </div>

      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleSubmitExperience}
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

export default Experiences;
