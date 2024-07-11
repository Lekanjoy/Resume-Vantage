import Image from "next/image";
import React from "react";
import Button from "../../button";
import heroImg from "@/public/assets/landing-page/Dayflow Book.png";
import vector from "@/public/assets/landing-page/vector-hero.png";

const Hero = () => {
  return (
    <section className="w-full mt-24 flex flex-col justify-center items-center gap-y-6 lg:mt-32 lg:gap-y-8 2xl:gap-y-12">
      <div className="flex flex-col justify-center items-center text-center gap-y-6 lg:gap-y-8 2xl:gap-y-12">
        <h1 className="text-2xl text-secondary font-bold leading-[24px] lg:text-6xl  lg:leading-[60px] 2xl:text-8xl 2xl:leading-[96px]">
          Craft Your Winning Resume With{" "}
          <span className="font-semibold text-primary-100">Resume</span>
          <span className="text-primary">Vantage.</span>
        </h1>
        <p className="text-secondary-100 font-medium lg:text-xl lg:font-semibold lg:max-w-[700px]">
          Unlock your career potential with our effortless resume building
          platform, powered by AI.
        </p>
        <div className="mx-auto">
          <Button
            text="Get Started"
            bgColor={"bg-primary"}
            textColor={"text-white"}
            stroke={"#FFFFFF"}
          />
        </div>
      </div>
      <div className="w-[250px] h-[250px] lg:w-auto lg:h-auto">
        <Image
          src={heroImg}
          alt="Hero"
          className="w-full h-full relative -z-[1]"
        />
      </div>
      <Image
        src={vector}
        alt=""
        className="absolute bottom-[190px] lg:-bottom-[210px] left-0 -z-[2]"
      />
    </section>
  );
};

export default Hero;
