"use client";
import { useState } from "react";
import CreateOrUpload from "@/components/dashboard/add-upload-resume/CardWrapper";
import Button from "@/components/dashboard/button";
import UserHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { stepsData } from "@/data";
import Experiences from "@/components/dashboard/experiences";
import Education from "@/components/dashboard/education";

const sectionData = [
  <CreateOrUpload key="create-or-upload" />,
  <UserHeader key="user-header" />,
  <Experiences key="experiences"/>,
  <Education key="education"/>
];

const Dashboard = () => {
  const [steps, setSteps] = useState(stepsData);
  const [isToggle, setIsToggle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [section] = useState(sectionData);

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      const newSteps = steps.map((step, index) =>
        index === currentIndex + 1 ? { ...step, checked: true } : step
      );

      setSteps(newSteps);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newSteps = steps.map((step, index) =>
        index === currentIndex ? { ...step, checked: false } : step
      );
      setSteps(newSteps);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="relative w-full min-h-dvh flex">
      <Sidebar steps={steps} isToggle={isToggle} setIsToggle={setIsToggle} />
      <section className="mt-[72px] w-full pr-4 pl-[96px] lg:pl-[calc(20%+56px)] lg:pr-14 2xl:lg:pl-[calc(20%+64px)] 2xl:pr-16">
        {section[currentIndex]}
        <div className="w-full my-20 flex justify-center items-center">
          <Button
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
