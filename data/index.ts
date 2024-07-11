import template1 from "@/public/assets/landing-page/template-1.png";
import template2 from "@/public/assets/landing-page/template-2.png";
import template3 from "@/public/assets/landing-page/template-3.png";

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
