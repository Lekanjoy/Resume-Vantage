import React from "react";
import Button, { ButtonProps as ConfirmProps } from "../button";
import { useRouter, useSearchParams } from "next/navigation";
import { useTypedSelector } from "@/store/store";
import { setIsCompleted } from "@/app/actions/setCompleted";

const Confirm = ({ currentIndex, handleNext, handlePrev }: ConfirmProps) => {
  const resumePreference = useTypedSelector((store) => store.resumePreference);
  const { selectedTemplate } = resumePreference;
  const searchParams = useSearchParams();
  const resumeId = searchParams.get("resumeId") as string;

  // Confirm and complete then navigate user to the dashboard/export page
  const router = useRouter();

  const confirmAndNavigate = async () => {
    await setIsCompleted(resumeId, true);
    router.push(`/dashboard/export?template=${selectedTemplate}`);
  };

  return (
    <div>
      <div className="my-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-16">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-4xl">
          Congratulations!
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          You can choose to continue editing your resume, download, or send to
          your email in the next page.
        </p>
      </div>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={confirmAndNavigate}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default Confirm;
