export type resumeDataProps = {
  resumeData: {
    name: string;
    title: string;
    email: string;
    location: string;
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