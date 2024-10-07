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
  };
  return (
    <Link
      href={`/dashboard/?resumeId=${resume?._id}&editing=true`}
      className="flex flex-col w-[200px] min-h-full"
    >
      <Resume resumeData={resumeData} />
    </Link>
  );
};

export default View;