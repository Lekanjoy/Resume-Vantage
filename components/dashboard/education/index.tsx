import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/input";
import template from "@/public/assets/landing-page/template-1.png";
import plus from "@/public/assets/dashboard/plusIcon.svg";

interface FormState {
  id: number;
  startDate: string;
  gradDate: string;
  isChecked: boolean;
  name: string;
  location: string;
  degree: string;
  field: string;
}

// Define types for the event handlers
type CheckboxChangeEvent = ChangeEvent<HTMLInputElement>;
type InputChangeEvent = ChangeEvent<HTMLInputElement>;

const Education = () => {
  const [todayDate, setTodayDate] = useState<string>("");
  const [forms, setForms] = useState<FormState[]>([
    {
      id: 1,
      startDate: todayDate,
      gradDate: todayDate,
      isChecked: false,
      name: "",
      location: "",
      degree: "",
      field: "",
    },
  ]);

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const todayDate = `${year}-${month}-${day}`;
    setTodayDate(todayDate);
    setForms([
      {
        id: 1,
        startDate: todayDate,
        gradDate: todayDate,
        isChecked: false,
        field: "",
        name: "",
        location: "",
        degree: "",
      },
    ]);
  }, []);

  const handleAddForm = () => {
    setForms((prevForms) => [
      ...prevForms,
      {
        id: prevForms.length + 1,
        startDate: todayDate,
        gradDate: todayDate,
        isChecked: false,
        field: "",
        name: "",
        location: "",
        degree: "",
      },
    ]);
  };

  const handleCheckboxChange = (index: number) => (e: CheckboxChangeEvent) => {
    const newForms = [...forms];
    newForms[index].isChecked = e.target.checked;
    if (newForms[index].isChecked === true) {
      newForms[index].gradDate = "Present";
    } else {
      newForms[index].gradDate = todayDate;
    }
    setForms(newForms);
  };

  const handleInputChange =
    (index: number, field: keyof FormState) => (e: InputChangeEvent) => {
      const newForms = [...forms];
      if (field === "id" || field === "isChecked") return;
      newForms[index][field] = e.target.value;
      setForms(newForms);
    };

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:mb-14">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Discuss your education history
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Tell us about the institutions, colleges, or training courses you have
          taken or been involved in.
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-y-12 lg:justify-between">
        {forms.map((form, index) => (
          <form
            key={form.id}
            className="flex flex-col flex-shrink-0 gap-y-6 lg:grid lg:w-[70%] lg:grid-cols-2 lg:gap-x-8"
          >
            <CustomInput
              id={`name-${form.id}`}
              type="text"
              label="Name of your School"
              placeholder="Harvard University"
              value={form.name}
              onChange={handleInputChange(index, "name")}
            />
            <CustomInput
              id={`location-${form.id}`}
              type="text"
              label="School Location"
              placeholder="Boston, USA"
              value={form.location}
              onChange={handleInputChange(index, "location")}
            />
            <CustomInput
              id={`degree-${form.id}`}
              type="text"
              label="Type of Degree"
              placeholder="M.D."
              value={form.degree}
              onChange={handleInputChange(index, "degree")}
            />
            <CustomInput
              id={`field-${form.id}`}
              type="text"
              label="Field of Study"
              placeholder="Surgery"
              value={form.field}
              onChange={handleInputChange(index, "field")}
            />
            <CustomInput
              id={`start-${form.id}`}
              type="date"
              label="Start Date"
              value={form.startDate}
              onChange={handleInputChange(index, "startDate")}
            />
            <CustomInput
              id={`end-${form.id}`}
              type="date"
              label="Graduation Date"
              isDisabled={form.isChecked}
              value={form.isChecked === true ? "" : form.gradDate}
              onChange={handleInputChange(index, "gradDate")}
            />
            <div className="flex items-center gap-x-4">
              <input
                type="checkbox"
                name={`checkbox-${form.id}`}
                id={`checkbox-${form.id}`}
                checked={form.isChecked}
                onChange={handleCheckboxChange(index)}
              />
              <label
                htmlFor={`checkbox-${form.id}`}
                className="text-xs text-secondaryColor-100 lg:text-sm"
              >
                I’m still enrolled
              </label>
            </div>
          </form>
        ))}

        <div className="w-full border border-primaryColor rounded-md lg:absolute lg:-right-10 lg:top-0 lg:w-[30%]">
          <Image src={template} alt="templates" className="w-full h-full" />
        </div>
      </div>
      <button
        onClick={handleAddForm}
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

export default Education;
