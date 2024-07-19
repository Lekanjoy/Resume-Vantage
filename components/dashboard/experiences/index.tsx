import { ChangeEvent, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/input";
import template from "@/public/assets/landing-page/template-1.png";

const Experiences = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:mb-14">
        <h1 className="text-secondary text-lg font-semibold lg:text-5xl">
          Now, Let’s include your experience
        </h1>
        <p className="text-xs text-secondary-100 lg:text-sm">
          Enter details about your most recent job.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-12 lg:flex-row  lg:gap-x-10 lg:justify-between">
        <form
          action=""
          className="flex flex-col flex-shrink-0 gap-y-6 lg:grid lg:w-[70%] lg:grid-cols-2 lg:gap-x-8"
        >
          <CustomInput
            id={"jobT"}
            type={"text"}
            label={"Job Title"}
            placeholder={"Product Designer"}
          />
          <CustomInput
            id={"company"}
            type={"text"}
            label={"Company"}
            placeholder={"Microsoft"}
          />
          <CustomInput
            id={"city"}
            type={"text"}
            label={"City"}
            placeholder={"London"}
          />
          <CustomInput
            id={"ctry"}
            type={"text"}
            label={"Country"}
            placeholder={"United Kingdom"}
          />
          <CustomInput id={"start"} type={"date"} label={"Start Date"} />
          <CustomInput
            id={"end"}
            type={"date"}
            label={"End Date"}
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
              className="text-xs text-secondary-100 lg:text-sm"
            >
              I currently work here
            </label>
          </div>
        </form>
        <div className="w-full border border-primary rounded-md lg:w-[30%]">
          <Image src={template} alt="templates" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default Experiences;
