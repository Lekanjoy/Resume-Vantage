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
      title: string;
      company: string;
      dates: string;
      location: string;
      description: string[];
    }[];
    education: {
      institution: string;
      degree: string;
      dates: string;
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
