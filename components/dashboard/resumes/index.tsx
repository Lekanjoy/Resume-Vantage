import CertificationPreview from "@/components/resume-preview/CertificationPreview";
import EducationPreview from "@/components/resume-preview/EducationPreview";
import ExperiencePreview from "@/components/resume-preview/ExperiencePreview";
import PreviewHeader from "@/components/resume-preview/PreviewHeader";
import SkillsPreview from "@/components/resume-preview/SkillsPreview";
import { resumeDataProps } from "@/types";

const Resume = ({ resumeData }: resumeDataProps) => {
  return (
    <section className="bg-white max-w-full h-[250px] overflow-y-auto scrollbar-hide border border-secondaryColor-100/50 rounded-md p-1 flex flex-col lg:min-w-full">
      <PreviewHeader resumeData={resumeData} />
      <SkillsPreview resumeData={resumeData} />
      <ExperiencePreview resumeData={resumeData} />
      <EducationPreview resumeData={resumeData} />
      <CertificationPreview resumeData={resumeData} />
    </section>
  );
};
export default Resume;
