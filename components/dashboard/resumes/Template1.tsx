import { resumeDataProps } from "@/types";
import CertificationPreview from "@/components/resume-preview-1/CertificationPreview";
import EducationPreview from "@/components/resume-preview-1/EducationPreview";
import ExperiencePreview from "@/components/resume-preview-1/ExperiencePreview";
import PreviewHeader from "@/components/resume-preview-1/PreviewHeader";
import SkillsPreview from "@/components/resume-preview-1/SkillsPreview";

const Template1 = ({ resumeData }: resumeDataProps) => {
  return (
    <>
      <PreviewHeader resumeData={resumeData} />
      <SkillsPreview resumeData={resumeData} />
      <ExperiencePreview resumeData={resumeData} />
      <EducationPreview resumeData={resumeData} />
      <CertificationPreview resumeData={resumeData} />
    </>
  );
};

export default Template1;
