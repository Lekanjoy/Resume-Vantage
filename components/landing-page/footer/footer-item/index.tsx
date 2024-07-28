"use client";
import { useState } from "react";
import Image from "next/image";
import arrowDown from "@/public/assets/landing-page/arrowDown.svg";
import { AnimatePresence, motion } from "framer-motion";

interface footerProps {
  foot: {
    id: number;
    title: string;
    links: string[];
  };
}

const FooterItem = ({ foot }: footerProps) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ul className="flex flex-col gap-y-3 ease-in-out duration-300">
      <li className="flex items-center justify-center gap-x-1 lg:justify-start">
        <p className="text-secondaryColor lg:text-left">{foot.title}</p>
        <Image
          src={arrowDown}
          alt="arrow down"
          className="cursor-pointer lg:hidden"
          onClick={toggleAccordion}
        />
      </li>
      {/* Mobile Toggle */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-y-3 lg:hidden"
          >
            {foot.links.map((link, index) => (
              <motion.li
                key={index}
                className="cursor-pointer transition-all duration-300 ease-in-out"
                variants={itemVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <a href={link}>{link}</a>
              </motion.li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop */}
      {foot.links.map((link, index) => (
        <li
          key={index}
          className="hidden cursor-pointer transition-all duration-300 ease-in-out lg:block"
        >
          <a href={link}>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
