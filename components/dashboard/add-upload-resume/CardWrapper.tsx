"use client";
import { useState } from "react";
import { addOrUploadResumeCardData } from "@/data";
import AddOrUploadCard from ".";

const CreateOrUpload = () => {
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
    </>
  );
};

export default CreateOrUpload;
