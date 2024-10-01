export type resumeDataProps = {
  resumeData: {
    fname: string;
    lname: string;
    title: string;
    email: string;
    city: string;
    country: string;
    phone: string;
    summary: string;
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
  };
};

export type resumeData = {
  _id: string;
  completed: boolean;
  createdBy: string;
  jobExperiences: [];
  education: [];
  skills: [];
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
  summary: string;
};
