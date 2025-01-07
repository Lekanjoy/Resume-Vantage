import template1 from "@/public/assets/landing-page/template-1.png";
import template2 from "@/public/assets/landing-page/template-2.png";
import template3 from "@/public/assets/landing-page/template-3.png";
import add from "@/public/assets/dashboard/add.svg";
import upload from "@/public/assets/dashboard/upload.svg";
import { StaticImageData } from "next/image";

export const addOrUploadResumeCardData = [
  {
    id: 1,
    title: "Create a new resume",
    text: " We will be with you every step of the way.",
    img: add as StaticImageData,
  },
  {
    id: 2,
    title: "Use an existing resume",
    text: "We will transfer your information to the new template.",
    img: upload,
  },
];

export const navItems: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];
export const templatesData = [
  {
    id: 0,
    text: "Simple Resume Template",
    img: template1,
    name: 'template1',
  },

  {
    id: 1,
    text: "Creative Resume Template",
    img: template2,
    name: 'template2',
  },

  {
    id: 2,
    text: "Professional Resume Template",
    img: template3,
    name: 'template3',
  },
];

export const footerData = [
  {
    id: 0,
    title: "Company",
    links: ["About", "Careers"],
  },

  {
    id: 1,
    title: "Product",
    links: [
      "Templates",
      "Features",
      "Pricing",
      "Documentation",
      "Integration",
      "Releases",
    ],
  },

  {
    id: 2,
    title: "Support",
    links: ["Help", "Centre", "FAQ", "Contact"],
  },

  {
    id: 3,
    title: "Social",
    links: ["Instagram", "Twitter", "Facebook", "LinkedIn", "Github"],
  },
];

export const stepsData = [
  { title: "Create/Upload", checked: false },
  { title: "Your Header", checked: false },
  { title: "Your Experience", checked: false },
  { title: "Experience Description", checked: false },
  { title: "Experience Review", checked: false },
  { title: "Education History", checked: false },
  { title: "Education Review", checked: false },
  { title: "Your Skills", checked: false },
  { title: "Summary", checked: false },
  { title: "Additional Details", checked: false },
  { title: "Confirm", checked: false },
];

export const resumeData = {
  currentEditingIndex: null as number | null,
  status: "idle",
  resumeId: "23dfasds4dfgdfg",
  fname: "Florish",
  lname: "Ralph",
  title: "Software Engineer",
  email: "Floralph@gmail.com",
  city: "London",
  country: "United Kingdom",
  phone: "+44 1234 56789",
  careerSummary:
    "Highly motivated and detail-oriented software engineer with a passion for building scalable and efficient software solutions.",
  rawCareerSummary: ["Dedicated and passionate developer"],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "Agile Development",
    "Scrum",
    "Team Collaboration",
  ],
  rawSkills: ["JavaScript", "React", "Node.js"],
  experience: [
    {
      _id: "66d4ee36ab71f75fc3fbbdc1",
      jobTitle: "Software Engineer",
      company: "ABC Corporation",
      startDate: "2018",
      endDate: "2020",
      city: "New York",
      country: "USA",
      responsibilities: {
        responsibilities: [
          "Developed multiple web applications using React and Node.js.",
          "Collaborated with cross-functional teams to design and implement new features.",
          "Improved code quality and efficiency by implementing automated testing and code reviews.",
        ],
      },
      rawResponsibilities: {
        responsibilities: [
          "Developed multiple web applications using React and Node.js.",
          "Collaborated with cross-functional teams to design and implement new features.",
          "Improved code quality and efficiency by implementing automated testing and code reviews.",
        ],
      },
    },
  ],
  education: [
    {
      _id: "1drrf54fgnfg",
      schoolName: "New York University",
      schoolLocation: "New York, United States",
      degreeType: "Diploma",
      studyField: "Frontend Engineering",
      startDate: "2018",
      gradDate: "2022",
      stillEnrolled: true,
    },
  ],
  certifications: [
    {
      title: "Certified Scrum Master",
      date: "2020",
      institution: "Meta Inc",
    },
  ],
};

export const resultData: string[] = [];
export const skillsResultData: string[] = [];
export const summaryResultData: string[] = [];
