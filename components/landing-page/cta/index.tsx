import Button from "@/components/button";
import Image from "next/image";
import React from "react";
import vector from '@/public/assets/landing-page/vector-cta.png'

const CTA = () => {
  return (
    <section className="px-6 lg:px-20 xl:px-[80px] 2xl:px-[120px]">
      <div className="relative w-full flex flex-col justify-center mb-20 items-center px-6 gap-y-4 text-center bg-[#7758F3] h-[550px] rounded-3xl  lg:max-h-[400px] lg:text-left lg:items-start lg:px-10 lg:gap-y-6 2xl:px-14">
        <div className="font-semibold text-xl text-[#FAFAFA] lg:text-4xl">
          <p>Unlock Your Career Odyssey,</p> Begin Your Resume
          <span className="font-extrabold">Vantage. </span>Journey Today!
        </div>
        <p className="font-medium text-sm text-[#E6E6E6] lg:text-base 2xl:text-xl">
          Ready to stand out in the job market? Your next career move starts here.
        </p>
        <Button
          text="Get Started"
          bgColor={"bg-white"}
          textColor={"text-[#7758F3]"}
          stroke={"#7758F3"}
        />
        <div className="absolute  right-0 bottom-0 lg:block">
        <Image src={vector} alt={""}/>
        </div>
      </div>
    </section>
  );
};

export default CTA;
