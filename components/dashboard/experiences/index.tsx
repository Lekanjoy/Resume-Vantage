import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import CustomInput from "@/components/input";
import template from "@/public/assets/landing-page/template-1.png";

const Experiences = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const todayDate = `${year}-${month}-${day}`;
    setStartDate(todayDate);
    setEndDate(todayDate);
  }, []);

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-14">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Now, Let’s include your experience
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
          <CustomInput
            id={"start"}
            type={"date"}
            label={"Start Date"}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <CustomInput
            id="end"
            type={isChecked ? "text" : "date"}
            label="End Date"
            value={isChecked ? "Present" : endDate}
            onChange={(e) => !isChecked && setEndDate(e.target.value)}
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
        <div className="w-full border border-primary rounded-md lg:w-[30%]">
          <Image src={template} alt="templates" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default Experiences;
