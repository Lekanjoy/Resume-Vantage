import Link from "next/link";
import Resume from "../dashboard/resumes";
import { resumeData } from "@/types";

type ViewProps = {
  resume: resumeData;
};

const View = ({ resume }: ViewProps) => {
  const resumeData = {
    fname: resume.firstName || "",
    lname: resume.lastName || "",
    title: resume.profession || "",
    email: resume.publicEmail || "",
    city: resume.city || "",
    country: resume.country || "",
    phone: resume.phoneNumber || "",
    careerSummary: resume.careerSummary || "",
    skills: resume.skills || [],
    experience: resume.jobExperiences || [],
    education: resume.education || [],
    certifications: resume.certifications || [],
    templateType: resume.templateType ?? 'template1'
  };
  
  return (
    <Link
      href={`/dashboard/export?resumeId=${resume?._id}`}
      className="flex flex-col min-w-[200px] py-6 ease-in-out duration-500 min-h-full lg:max-w-[200px] hover:scale-105"
    >
      <Resume resumeData={resumeData} />
    </Link>
  );
};

export default View;