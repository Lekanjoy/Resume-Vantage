"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import searchIcon from "@/public/assets/landing-page/searchIcon.svg";
import hamburgerIcon from "@/public/assets/landing-page/hamburgerIcon.svg";
import closeIcon from "@/public/assets/landing-page/closeIcon.svg";
import MobileNav from "./mobile-nav";
import Button from "../button";
import { navItems } from "@/data";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <header className="fixed z-10 w-full left-0 top-0 px-6 py-4 bg-white shadow flex justify-between items-center cursor-pointer">
      <Link href={"/"} className="relative text-sm z-10 md:text-2xl">
        <span className="font-medium text-primary-100">Resume</span>
        <span className="font-bold text-primary">Vantage.</span>
      </Link>

      <div className="flex items-center gap-x-6 lg:hidden">
        <Image src={searchIcon} alt="Search icon" />
        <Image
          src={showNav ? closeIcon : hamburgerIcon}
          alt="Hamburger icon"
          className="relative z-10"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      <nav className="hidden gap-x-5 lg:flex lg:flex-row xl:gap-x-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm text-secondary hover:text-secondary-100 xl:text-base"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="hidden gap-x-9 items-center lg:flex lg:flex-row">
        <Link
          href="/login"
          className="text-primary text-sm font-medium xl:text-base"
        >
          Log in
        </Link>
        <Button
          text="Get Started"
          bgColor={"bg-primary"}
          textColor={"text-white"}
          stroke={"#FFFFFF"}
        />
      </div>

      {/* Mobile Nav and UI */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ type: "spring", stiffness: 50 }}
            className="fixed inset-0"
          >
            <MobileNav />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
