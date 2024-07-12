import React from "react";
import { Open_Sans } from "next/font/google";
import { footerData } from "@/data";
import FooterItem from "./footer-item";

const openSans = Open_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer
      className={`${openSans.className} w-full font-medium text-secondary-100 text-sm mb-20 flex flex-col gap-y-16 ease-in-out duration-300 text-center px-6 lg:px-20  lg:text-left lg:gap-y-12 xl:px-[80px] 2xl:px-[120px] 2xl:gap-y-16`}
    >
      <div className="w-full flex flex-col gap-y-16 justify-between items-center ease-in-out duration-300 lg:items-start lg:flex-row lg:gap-x-16">
        <div className="text-xl lg:w-1/4 ">
          <span className="font-semibold text-primary-100">Resume</span>
          <span className="text-primary">Vantage. </span>
        </div>
        <div className="flex flex-col gap-y-6 lg:justify-between lg:flex-row lg:gap-x-8 lg:w-3/4 ">
          {footerData.map((foot) => {
            return <FooterItem key={foot.id} foot={foot}/>;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-8 items-center lg:justify-between lg:items-start lg:flex-row">
        <ul className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 2xl:gap-x-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy</p>
        </ul>
        <p className="font-normal">
          © 2024 <span className="font-semibold text-primary-100">Resume</span>
          <span className="text-primary">Vantage. </span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
