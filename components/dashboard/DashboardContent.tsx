"use client";
import { JSX, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { stepsData } from "@/data";
import { ButtonProps } from "./button";
import { setAuthToken } from "@/app/actions/auth";
import CreateOrUpload from "@/components/dashboard/add-upload-resume/CardWrapper";
import UserHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import Experiences from "@/components/dashboard/experiences";
import Education from "@/components/dashboard/education";
import ExperienceDescription from "./describe-experience";
import ExperienceReview, { ExperienceReviewProps } from "./review-experience";
import Skills from "./skills";
import Summary from "./summary";
import AdditionalDetails from "./details";
import Confirm from "./confirm";

const DashboardContent = () => {
  const [steps, setSteps] = useState(stepsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isToggle, setIsToggle] = useState(false);

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

  const sectionData = [
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <CreateOrUpload key="create-or-upload" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <UserHeader key="user-header" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <Experiences key="experiences" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <ExperienceDescription key="exp-describe" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ExperienceReviewProps) => (
      <ExperienceReview key="exp-preview" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <Education key="education" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <Skills key="skills" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <Summary key="summary" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <AdditionalDetails key="details" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <Confirm key="confirm" {...props} />
    ),
  ];

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const payload = searchParams.get("payload");
    if (payload) {
      // Set the token in cookie
      setAuthToken(payload);
      // Set the token in sessionStorage
      sessionStorage.setItem("token", payload);
      // Remove the payload from the URL
      requestAnimationFrame(() => {
        router.replace("/dashboard");
      });
    }
  }, [router, searchParams]);

  return (
    <section className="relative w-full min-h-dvh flex">
      <Sidebar steps={steps} isToggle={isToggle} setIsToggle={setIsToggle} />
      <section className="mt-[72px] w-full pr-4 pl-[96px] lg:pl-[calc(20%+56px)] lg:pr-14 2xl:lg:pl-[calc(20%+64px)] 2xl:pr-16">
        {sectionData[currentIndex]({
          currentIndex,
          handlePrev,
          handleNext,
          setCurrentIndex,
        })}
      </section>
    </section>
  );
};

export default DashboardContent;
