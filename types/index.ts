export type resumeDataProps = {
  resumeData: {
    fname: string;
    lname: string;
    title: string;
    email: string;
    city: string;
    country: string;
    phone: string;
    careerSummary: string;
    skills: string[];
    experience: {
      _id: string;
      jobTitle: string;
      company: string;
      startDate: string;
      endDate: string;
      city: string;
      country: string;
      responsibilities: {
        responsibilities: string[];
      };
    }[];
    education: {
      _id: string;
      schoolName: string;
      schoolLocation: string;
      degreeType: string;
      studyField: string;
      startDate: string;
      gradDate?: string;
      stillEnrolled: boolean;
    }[];
    certifications: {
      title: string;
      date: string;
      institution: string;
    }[];
    templateType?: string;
  };
};

export type resumeData = {
  _id: string;
  completed: boolean;
  createdBy: string;
  jobExperiences: [];
  education: [];
  skills: [];
  rawSkills: string[];
  certifications: [];
  createdAt: string;
  updatedAt: string;
  city: string;
  country: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profession: string;
  publicEmail: string;
  careerSummary: string;
  rawCareerSummary: string[];
  templateType?: string;
};
