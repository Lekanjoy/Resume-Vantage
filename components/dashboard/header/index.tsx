"use client";
import CustomInput from "@/components/input";
import ResumePreview from "@/components/resume-preview";
import { updatePersonalInfo } from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { useState } from "react";

const UserHeader = () => {
  const resumeData = useTypedSelector((store) => store.resume);
  const dispatch = useAppDispatch();
  
  const [editedFields, setEditedFields] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePersonalInfo({ [field]: e.target.value }));
    // Mark the field as edited
    setEditedFields(prev => ({ ...prev, [field]: true }));
  };



  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:mb-14">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          First, work on your header
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Enter your personal details and contact information.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-12 lg:flex-row lg:gap-x-10 lg:justify-between">
        <form
          action=""
          className="flex flex-col flex-shrink-0 gap-y-6 h-fit lg:grid lg:w-[60%] lg:grid-cols-2 lg:gap-x-8"
        >
          <CustomInput
            id={"fname"}
            type={"text"}
            label={"First Name"}
            placeholder={"Flourish"}
            value={resumeData.fname}
            onChange={handleInputChange("fname")}
            isEdited={editedFields['fname']}
          />
          <CustomInput
            id={"lname"}
            type={"text"}
            label={"Last Name"}
            placeholder={"Ralph"}
            value={resumeData.lname}
            onChange={handleInputChange("lname")}
            isEdited={editedFields['lname']}

          />
          <CustomInput
            id={"city"}
            type={"text"}
            label={"City"}
            placeholder={"London"}
            value={resumeData.city}
            onChange={handleInputChange("city")}
            isEdited={editedFields['city']}

          />
          <CustomInput
            id={"ctry"}
            type={"text"}
            label={"Country"}
            placeholder={"United Kingdom"}
            value={resumeData.country}
            onChange={handleInputChange("country")}
            isEdited={editedFields['country']}

          />
          <CustomInput
            id={"phone"}
            type={"phone"}
            label={"Phone Number"}
            placeholder={"+44 1234 56789"}
            value={resumeData.phone}
            onChange={handleInputChange("phone")}
            isEdited={editedFields['phone']}

          />
          <CustomInput
            id={"email"}
            type={"email"}
            label={"Email Address"}
            placeholder={"Floralph@gmail.com"}
            value={resumeData.email}
            onChange={handleInputChange("email")}
            isEdited={editedFields['email']}

          />
        </form>
        <div className="w-full border border-primaryColor rounded-md lg:w-[40%]">
          <ResumePreview />
        </div>
      </div>
    </>
  );
};

export default UserHeader;
