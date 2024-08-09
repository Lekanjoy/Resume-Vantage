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
  },

  {
    id: 1,
    text: "Creative Resume Template",
    img: template2,
  },

  {
    id: 2,
    text: "Professional Resume Template",
    img: template3,
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
  { title: "Your Skills", checked: false },
  { title: "Summary", checked: false },
  { title: "Additional Details", checked: false },
  { title: "Confirm", checked: false },
];

export const resumeData = {
  fname: "Florish",
  lname: "Ralph",
  title: "Software Engineer",
  email: "Floralph@gmail.com",
  city: "London",
  country: "United Kingdom",
  phone: "+44 1234 56789",
  summary:
    "Highly motivated and detail-oriented software engineer with a passion for building scalable and efficient software solutions.",
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
  experience: [
    {
      title: "Software Engineer",
      company: "ABC Corporation",
      dates: "2018-2020",
      location: "New York, USA",
      description: [
        "Developed multiple web applications using React and Node.js.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Improved code quality and efficiency by implementing automated testing and code reviews.",
      ],
    }
  ],
  education: [
    {
      institution: "New York University",
      degree: "Diploma in Frontend Engineering",
      dates: "2018-2022",
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

export const resultData: {
  id: number;
  text: string;
}[] = [
  {
    id: 0,
    text: "Carried out interviews and User research to understand users’ pain points.",
  },
  {
    id: 1,
    text: "Developed user stories, user journey maps, and user personas.",
  },
  {
    id: 2,
    text: "Brainstormed features to serve as solutions to the problems of users.",
  },
  {
    id: 3,
    text: "Created wireframes and high fidelity designs to showcase the user interface of the product.",
  },
  {
    id: 4,
    text: "Performed usability testing to showcase the flow of the product and identify areas to improve.",
  },
];
