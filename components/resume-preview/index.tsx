"use client";
import { useTypedSelector } from "@/store/store";
import PreviewHeader from "./PreviewHeader";
import SkillsPreview from "./SkillsPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
import CertificationPreview from "./CertificationPreview";
import ResumeSkeleton from "./ResumeSkeleton";

const ResumePreview = () => {
  const resumeData = useTypedSelector((state) => state.resume);
  const { status } = resumeData;

  return (
    <>
      {status === "loading" ? (
        <ResumeSkeleton />
      ) : (
        <section className="bg-white min-w-[250px] h-[300px] overflow-y-auto scrollbar-hide border border-secondaryColor-100/50 rounded-md p-1 flex flex-col lg:min-w-full">
          <PreviewHeader resumeData={resumeData} />
          <SkillsPreview resumeData={resumeData} />
          <ExperiencePreview resumeData={resumeData} />
          <EducationPreview resumeData={resumeData} />
          <CertificationPreview resumeData={resumeData} />
        </section>
      )}
    </>
  );
};

export default ResumePreview;
