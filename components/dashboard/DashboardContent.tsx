"use client";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { stepsData } from "@/data";
import { ButtonProps } from "./button";
import { setAuthToken } from "@/app/actions/auth";
import { useAppDispatch } from "@/store/store";
import { fetchResumeData } from "@/features/resumeSlice";
import UserHeader from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import Experiences, {
  ExtendedExperienceProps,
} from "@/components/dashboard/experiences";
import Education, {
  ExtendedEducationProps,
} from "@/components/dashboard/education";
import EducationReview from "./review-education";
import ExperienceDescription from "./describe-experience";
import ExperienceReview, { ExperienceReviewProps } from "./review-experience";
import Skills from "./skills";
import Summary from "./summary";
import AdditionalDetails from "./details";
import Confirm from "./confirm";
import CreationMethod from "./add-upload-resume/CreationMethod";
import bulb from "@/public/assets/dashboard/insight.svg";

const DashboardContent = ({ id }: { id: string | string[] | undefined }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    if (id) dispatch(fetchResumeData(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    // Clear sessionStorage on page refresh
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasNavigatedToExperiences");
      sessionStorage.removeItem("hasNavigatedToEducation");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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

  const handleEditExperience = () => {
    setCurrentIndex(2);
  };

  const handleEditEducation = () => {
    setCurrentIndex(5);
  };

  const sectionData = [
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <CreationMethod key="create-or-upload" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <UserHeader key="user-header" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ExtendedExperienceProps) => (
      <Experiences key="experiences" {...props} id={id} />
    ),
    (props: JSX.IntrinsicAttributes & ButtonProps) => (
      <ExperienceDescription key="exp-describe" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ExperienceReviewProps) => (
      <ExperienceReview
        key="exp-preview"
        {...props}
        onEditExperience={handleEditExperience}
      />
    ),
    (props: JSX.IntrinsicAttributes & ExtendedEducationProps) => (
      <Education key="education" {...props} />
    ),
    (props: JSX.IntrinsicAttributes & ExperienceReviewProps) => (
      <EducationReview
        key="edu-preview"
        {...props}
        onEditEducation={handleEditEducation}
      />
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

  return (
    <section className="relative w-full min-h-dvh flex">
      <Sidebar steps={steps} isToggle={isToggle} setIsToggle={setIsToggle} />
      <Image
        src={bulb}
        alt="Insight icon"
        className="cursor-pointer absolute right-4 top-9 xl:right-8 xl:top-7 xl:w-[56px] xl:h-[56px]"
      />
      <section className="mt-[72px] w-full pr-4 pl-[96px] lg:pl-[calc(20%+56px)] lg:pr-14 2xl:lg:pl-[calc(20%+64px)] 2xl:pr-16">
        {sectionData[currentIndex]({
          handlePrev,
          handleNext,
          currentIndex,
          setCurrentIndex,
          onEditExperience: handleEditExperience,
          id,
        })}
      </section>
    </section>
  );
};

export default DashboardContent;
