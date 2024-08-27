"use client";
import { useTypedSelector } from "@/store/store";
import PreviewHeader from "./PreviewHeader";
import SkillsPreview from "./SkillsPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
import CertificationPreview from "./CertificationPreview";

const ResumePreview = () => {
  const resumeData = useTypedSelector((state) => state.resume);

  return (
    <section className="bg-white max-w-full min-h-full border border-secondaryColor-100/50 rounded-md p-1 flex flex-col">
      <PreviewHeader resumeData={resumeData} />
      <SkillsPreview resumeData={resumeData} />
      <ExperiencePreview resumeData={resumeData} />
      <EducationPreview resumeData={resumeData} />
      <CertificationPreview resumeData={resumeData} />
    </section>
  );
};
export default ResumePreview;
