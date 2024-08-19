"use client";
import { useCallback, useEffect, useState } from "react";
import { addOrUploadResumeCardData } from "@/data";
import { useToast } from "@/components/ui/use-toast";
import { initializeAction } from "@/app/actions/createResume";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button, { ButtonProps as CardWrapperProps } from "../button";
import AddOrUploadCard from ".";

const CreateOrUpload = ({
  currentIndex,
  handlePrev,
  handleNext,
}: CardWrapperProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const { toast } = useToast();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //Move page to Next Step if there is a resumeId in the URL
  useEffect(() => {
    const resumeId = searchParams.get("resumeId");
    if (resumeId) {
      handleNext();
    }
  }, [searchParams, handleNext]);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const initializeResume = async () => {
    if (selectedCardId) {
      const res = await initializeAction();
      if (res.success) {
        router.push(
          pathname + "?" + createQueryString("resumeId", res.data?.payload?._id)
        );
        handleNext();
      } else {
        toast({
          title: "Uh oh!",
          description: res.error,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Uh oh!",
        description: "Select a method to start.",
        variant: "destructive",
      });
    }
  };

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
          handleNext={initializeResume}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
};

export default CreateOrUpload;
