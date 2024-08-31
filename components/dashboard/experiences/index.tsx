import { ChangeEvent, useEffect, useState } from "react";
import CustomInput from "@/components/input";
import ResumePreview from "@/components/resume-preview";
import Button, { ButtonProps as ExperienceProps } from "../button";
import { addExperience, setCurrentEditingIndex, updateExperience } from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";

const Experiences = ({
  currentIndex,
  handleNext,
  handlePrev,
}: ExperienceProps) => {
  const dispatch = useAppDispatch();
  const experiences = useTypedSelector((store) => store.resume.experience);
  const currentEditingIndex = useTypedSelector((state) => state.resume.currentEditingIndex);

  const [isChecked, setIsChecked] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({
    title: "",
    company: "",
    dates: "",
    location: "",
    description: [""],
  });

  useEffect(() => {
    if (currentEditingIndex !== null && experiences[currentEditingIndex]) {
      setCurrentExperience(experiences[currentEditingIndex]);
      setIsChecked(experiences[currentEditingIndex].dates.split(" - ")[1] === "Present");
    } else {
      const today = new Date();
      const todayDate = today.toISOString().split("T")[0];
      setCurrentExperience({
        title: "",
        company: "",
        dates: `${todayDate} - ${todayDate}`,
        location: "",
        description: [""],
      });
      setIsChecked(false);
    }
  }, [currentEditingIndex, experiences]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    const endDate = event.target.checked
      ? "Present"
      : currentExperience.dates.split(" - ")[0];
    setCurrentExperience((prev) => ({
      ...prev,
      dates: `${prev.dates.split(" - ")[0]} - ${endDate}`,
    }));
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (field === "city" || field === "country") {
        setCurrentExperience((prev) => ({
          ...prev,
          location: `${
            field === "city" ? e.target.value : prev.location.split(", ")[0]
          }, ${
            field === "country" ? e.target.value : prev.location.split(", ")[1]
          }`,
        }));
      } else if (field === "startDate" || field === "endDate") {
        const [start, end] = currentExperience.dates.split(" - ");
        setCurrentExperience((prev) => ({
          ...prev,
          dates: `${field === "startDate" ? e.target.value : start} - ${
            field === "endDate" ? e.target.value : end
          }`,
        }));
      } else {
        setCurrentExperience((prev) => ({ ...prev, [field]: e.target.value }));
      }
    };

  const handleSubmit = () => {
    if (currentEditingIndex !== null) {
      dispatch(updateExperience({experience: currentExperience }));
    } else {
      dispatch(addExperience(currentExperience));
    dispatch(setCurrentEditingIndex(experiences.length));

    }
    handleNext();
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
            id={"title"}
            type={"text"}
            label={"Job Title"}
            placeholder={"Product Designer"}
            value={currentExperience.title}
            onChange={handleInputChange("title")}
          />
          <CustomInput
            id={"company"}
            type={"text"}
            label={"Company"}
            placeholder={"Microsoft"}
            value={currentExperience.company}
            onChange={handleInputChange("company")}
          />
          <CustomInput
            id={"city"}
            type={"text"}
            label={"City"}
            placeholder={"London"}
            value={currentExperience.location.split(", ")[0]}
            onChange={handleInputChange("city")}
          />
          <CustomInput
            id={"country"}
            type={"text"}
            label={"Country"}
            placeholder={"United Kingdom"}
            value={currentExperience.location.split(", ")[1]}
            onChange={handleInputChange("country")}
          />
          <CustomInput
            id={"startDate"}
            type={"date"}
            label={"Start Date"}
            value={currentExperience.dates.split(" - ")[0]}
            onChange={handleInputChange("startDate")}
          />
          <CustomInput
            id="endDate"
            type={isChecked ? "text" : "date"}
            label="End Date"
            value={currentExperience.dates.split(" - ")[1]}
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
        <div className="w-full lg:w-[30%]">
          <ResumePreview />
        </div>
      </div>

      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleSubmit}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
};

export default Experiences;
