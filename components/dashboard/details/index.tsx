"use client";
import React from "react";
import Button, { ButtonProps as DetailsProps } from "../button";
import { useTypedSelector } from "@/store/store";


const AdditionalDetails = ({
  currentIndex,
  handleNext,
  handlePrev,
}: DetailsProps) => {
  const resumeData = useTypedSelector((store) => store.resume);

  return (
    <>
    Additional Details
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

export default AdditionalDetails;
