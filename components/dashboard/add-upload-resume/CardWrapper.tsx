"use client";
import { useState } from "react";
import { addOrUploadResumeCardData } from "@/data";
import AddOrUploadCard from ".";
import Button, { ButtonProps as CardWrapperProps } from "../button";

const CreateOrUpload = ({
  currentIndex,
  handlePrev,
  handleNext,
}: CardWrapperProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  return (
    <>
      <h1 className="text-secondaryColor text-lg font-semibold mb-10 lg:mb-14 lg:text-5xl">
        How do you want to create your resume?
      </h1>
      <div className=" flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:gap-x-10 2xl:gap-x-16">
        {addOrUploadResumeCardData.map((item) => {
          return (
            <AddOrUploadCard
              key={item.id}
              {...item}
              isChecked={item.id === selectedCardId}
              onClick={() => setSelectedCardId(item.id)}
            />
          );
        })}
      </div>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
};

export default CreateOrUpload;
