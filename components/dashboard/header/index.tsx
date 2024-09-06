"use client";
import { updatePersonalInfo } from "@/features/resumeSlice";
import { useAppDispatch, useTypedSelector } from "@/store/store";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createResumeHeader } from "@/app/actions/createResume";
import { useToast } from "@/components/toast/ShowToast";
import Button, { ButtonProps as UserHeaderProps } from "../button";
import ResumePreview from "@/components/resume-preview";
import CustomInput from "@/components/input";
import Toast from "@/components/toast";

const UserHeader = ({
  currentIndex,
  handleNext,
  handlePrev,
}: UserHeaderProps) => {
  const { showToast, toastState } = useToast();
  const resumeData = useTypedSelector((store) => store.resume);
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  const resumeId = searchParams.get("resumeId") as string;

  const { fname, lname, title, email, city, country, phone } = resumeData;
  const address = city + ", " + country;

  const [editedFields, setEditedFields] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  
  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePersonalInfo({ [field]: e.target.value }));
      // Mark the field as edited
      setEditedFields((prev) => ({ ...prev, [field]: true }));
    };


    
  const handleCreateHeader = async () => {
    setLoading(true);
    const res = await createResumeHeader(
      resumeId,
      fname,
      lname,
      city,
      country,
      address,
      title,
      phone,
      email
    );
    if (res.success) {
      setLoading(false);
      handleNext();
    } else {
      setLoading(false);
      showToast(res.error, "error");
      console.log(res.error);
    }
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
          className="flex flex-col flex-shrink-0 gap-y-6 h-fit lg:grid lg:w-[70%] lg:grid-cols-2 lg:gap-x-8"
        >
          <CustomInput
            id={"fname"}
            type={"text"}
            label={"First Name"}
            placeholder={"Flourish"}
            value={resumeData.fname}
            onChange={handleInputChange("fname")}
            isEdited={editedFields["fname"]}
          />
          <CustomInput
            id={"lname"}
            type={"text"}
            label={"Last Name"}
            placeholder={"Ralph"}
            value={resumeData.lname}
            onChange={handleInputChange("lname")}
            isEdited={editedFields["lname"]}
          />
          <CustomInput
            id={"title"}
            type={"text"}
            label={"Profession"}
            placeholder={"Sofware Engineer"}
            value={resumeData.title}
            onChange={handleInputChange("title")}
            isEdited={editedFields["title"]}
          />
          <CustomInput
            id={"city"}
            type={"text"}
            label={"City"}
            placeholder={"London"}
            value={resumeData.city}
            onChange={handleInputChange("city")}
            isEdited={editedFields["city"]}
          />
          <CustomInput
            id={"ctry"}
            type={"text"}
            label={"Country"}
            placeholder={"United Kingdom"}
            value={resumeData.country}
            onChange={handleInputChange("country")}
            isEdited={editedFields["country"]}
          />
          <CustomInput
            id={"addr"}
            type={"text"}
            label={"Adress"}
            value={address}
            disabled
          />
          <CustomInput
            id={"phone"}
            type={"phone"}
            label={"Phone Number"}
            placeholder={"+44 1234 56789"}
            value={resumeData.phone}
            onChange={handleInputChange("phone")}
            isEdited={editedFields["phone"]}
          />
          <CustomInput
            id={"email"}
            type={"email"}
            label={"Email Address"}
            placeholder={"Floralph@gmail.com"}
            value={resumeData.email}
            onChange={handleInputChange("email")}
            isEdited={editedFields["email"]}
          />
        </form>
        <div className="w-full min-h-full lg:w-[30%]">
          <ResumePreview />
        </div>
      </div>

      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleCreateHeader}
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

export default UserHeader;
