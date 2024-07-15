"use client";
import { useState } from "react";
import { addOrUploadResumeCardData } from "@/data";
import AddOrUploadCard from ".";

const CardWrapper = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  return (
    <section className="mt-[72px] w-full px-4 lg:px-14 2xl:px-16">
      <h1 className="text-secondary text-lg font-semibold mb-10 lg:mb-14 lg:text-5xl">
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
      <div className="mt-20 lg:w-[330px] lg:mx-auto">
        <button className="bg-primary text-white p-4 rounded-md w-full ease-in-out duration-300 hover:bg-primary-100">
          Continue
        </button>
      </div>
    </section>
  );
};

export default CardWrapper;
