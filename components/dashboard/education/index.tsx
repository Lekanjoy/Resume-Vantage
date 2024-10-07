import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import CustomInput from "@/components/input";
import ResumePreview from "@/components/resume-preview";
import Button, { ButtonProps as EducationProps } from "../button";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import {
  addEducation,
  fetchResumeData,
  setCurrentEditingIndex,
  updateEducation,
} from "@/features/resumeSlice";
import { createResumeEducation } from "@/app/actions/educationAction";
import Toast from "@/components/toast";
import { useToast } from "@/components/toast/ShowToast";
import { useSearchParams } from "next/navigation";
import { ButtonProps as ExperienceProps } from "../button";

export interface ExtendedEducationProps extends ExperienceProps {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const Education = ({
  currentIndex,
  setCurrentIndex,
  handleNext,
  handlePrev,
}: ExtendedEducationProps) => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { showToast, toastState } = useToast();
  const education = useTypedSelector((store) => store.resume.education);
  const resumeId = useTypedSelector((state) => state.resume.resumeId);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentEditingIndex = useTypedSelector(
    (state) => state.resume.currentEditingIndex
  );
  const [currentEducation, setCurrentEducation] = useState({
    _id: "",
    schoolName: "",
    schoolLocation: "",
    degreeType: "",
    studyField: "",
    startDate: "",
    gradDate: "",
    stillEnrolled: isChecked,
  });

  const editing = searchParams.get("editing") as string;
  const toBoolean =
    sessionStorage.getItem("hasNavigatedToEducation") === "true" ? true : false;
  const [hasNavigated, setHasNavigated] = useState(toBoolean);

  useEffect(() => {
    const isEditing = editing === "true";
    if (isEditing && !hasNavigated) {
      setCurrentIndex(6);
      setHasNavigated(true);
      // Store the navigation state in sessionStorage
      sessionStorage.setItem("hasNavigatedToEducation", "true");
    } else if (!isEditing) {
      // Clear the navigation state when not editing
      sessionStorage.removeItem("hasNavigatedToEducation");
      setHasNavigated(false);
    }
  }, [editing, setCurrentIndex, hasNavigated]);

  useEffect(() => {
    const today = new Date();
    const todayDate = today.toISOString().split("T")[0];
    if (currentEditingIndex !== null && education[currentEditingIndex]) {
      setCurrentEducation(education[currentEditingIndex]);
      setIsChecked(education[currentEditingIndex].gradDate === "Present");
    } else {
      setCurrentEducation({
        _id: "",
        schoolName: "",
        schoolLocation: "",
        degreeType: "",
        studyField: "",
        startDate: todayDate,
        gradDate: todayDate,
        stillEnrolled: false,
      });
      setIsChecked(false);
    }
  }, [currentEditingIndex, education]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const gradDate = event.target.checked
      ? "Present"
      : currentEducation.gradDate;
    setCurrentEducation((prev) => ({
      ...prev,
      gradDate,
      stillEnrolled: isChecked,
    }));
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentEducation((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmitEducation = async () => {
    setLoading(true);
    const educationInput = {
      resumeId,
      schoolName: currentEducation.schoolName,
      schoolLocation: currentEducation.schoolLocation,
      degreeType: currentEducation.degreeType,
      studyField: currentEducation.studyField,
      startDate: currentEducation.startDate,
      gradDate: currentEducation.gradDate,
      stillEnrolled: isChecked,
    };

    const result = await createResumeEducation(educationInput);
    if (result.success) {
      if (currentEditingIndex !== null) {
        const educationToUpdate = {
          ...currentEducation,
          stillEnrolled: isChecked,
        };
        dispatch(updateEducation({ education: educationToUpdate }));
        showToast("Education updated", "success");
      } else {
        const newEducation = {
          ...currentEducation,
          stillEnrolled: isChecked,
        };
        dispatch(addEducation(newEducation));
        dispatch(setCurrentEditingIndex(education.length));
        showToast("Education created successfully", "success");
      }
      dispatch(fetchResumeData(resumeId as string));
      setLoading(false);
      setTimeout(() => {
        handleNext();
      }, 3000);
    } else {
      setLoading(false);
      showToast(result.error, "error");
      console.error("Failed to create education:", result.error);
    }
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-14">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Discuss your education history
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Tell us about the institutions, colleges, or training courses you have
          taken or been involved in.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-y-12 lg:justify-between">
        <form className="flex flex-col flex-shrink-0 gap-y-6 lg:grid lg:w-[70%] lg:grid-cols-2 lg:gap-x-8">
          <CustomInput
            id="schoolName"
            type="text"
            label="Name of your School"
            placeholder="Harvard University"
            value={currentEducation.schoolName}
            onChange={handleInputChange("schoolName")}
          />
          <CustomInput
            id="schoolLocation"
            type="text"
            label="School Location"
            placeholder="Boston, USA"
            value={currentEducation.schoolLocation}
            onChange={handleInputChange("schoolLocation")}
          />
          <CustomInput
            id="degreeType"
            type="text"
            label="Type of Degree"
            placeholder="M.D."
            value={currentEducation.degreeType}
            onChange={handleInputChange("degreeType")}
          />
          <CustomInput
            id="studyField"
            type="text"
            label="Field of Study"
            placeholder="Surgery"
            value={currentEducation.studyField}
            onChange={handleInputChange("studyField")}
          />
          <CustomInput
            id="startDate"
            type="date"
            label="Start Date"
            value={currentEducation.startDate}
            onChange={handleInputChange("startDate")}
          />
          <CustomInput
            id="gradDate"
            type={isChecked ? "text" : "date"}
            label="Graduation Date"
            value={currentEducation.gradDate}
            onChange={handleInputChange("gradDate")}
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
              I&apos;m still enrolled
            </label>
          </div>
        </form>

        <div className="w-full min-h-full flex justify-center items-center lg:absolute lg:-right-10 lg:top-0 lg:w-[30%] lg:block">
          <ResumePreview />
        </div>
      </div>

      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleSubmitEducation}
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

export default Education;
