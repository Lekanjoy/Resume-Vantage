import React from "react";
import ResumePreview3 from "../resume-preview-3";
import ResumePreview2 from "../resume-preview-2";
import ResumePreview1 from "../resume-preview-1";
import { useTypedSelector } from "@/store/store";
import { cn } from "@/lib/utils";

interface PreviewProps {
  className?: string;
}

const Preview = ({ className }: PreviewProps) => {
  const resumeTemplate = useTypedSelector((store) => store.resumePreference);
  const { selectedTemplate } = resumeTemplate;
  return (
    <div
      className={cn(
        "w-full min-h-full flex justify-center items-center lg:w-[30%] lg:block",
        className
      )}
    >
      {selectedTemplate === "template1" ? (
        <ResumePreview1 />
      ) : selectedTemplate === "template2" ? (
        <ResumePreview2 />
      ) : selectedTemplate === "template3" ? (
        <ResumePreview3 />
      ) : null}
    </div>
  );
};

export default Preview;
