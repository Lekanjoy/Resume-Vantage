"use client";
import React, {  useState } from "react";
import Image from "next/image";
import { templatesData } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import template1 from "@/public/assets/landing-page/template-1.png";
import template2 from "@/public/assets/landing-page/template-2.png";
import template3 from "@/public/assets/landing-page/template-3.png";
import circleArrow from "@/public/assets/landing-page/circle-arrow.png";
import Button from "@/components/button";

const Discover = () => {
  const [templates] = useState(templatesData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Handle Next template Click
  const handleNextTemplate = () => {
    setDirection(1);
    setCurrentIndex((prevState) =>
      prevState < templates.length - 1 ? prevState + 1 : (prevState = 0)
    );
  };

  // Handle Previous Template Click
  const handlePrevTemplate = () => {
    setDirection(-1);
    setCurrentIndex((prevState) =>
      prevState > 0 ? prevState - 1 : (prevState = templates.length - 1)
    );
  };


  const variants = {
    enter: () => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: () => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className=" w-full my-20 flex flex-col justify-center items-center gap-y-6 lg:gap-y-8 2xl:gap-y-12">
      <div className="flex flex-col justify-center items-center text-center gap-y-6 lg:gap-y-8 2xl:gap-y-12">
        <h1 className="text-2xl text-secondary font-bold leading-[24px] lg:text-6xl  lg:leading-[60px] 2xl:text-8xl 2xl:leading-[96px]">
          Discover Your Professional Look with{" "}
          <span className="font-semibold text-primary-100">Resume</span>
          <span className="text-primary">Vantage. </span>
          Templates
        </h1>
        <p className="text-secondary-100 font-medium lg:text-xl lg:font-semibold lg:max-w-[700px]">
          We have a wide range of unique features readily available to help you
          stand out in the competitive job market and land your dream job.
        </p>
      </div>
      <div className="relative overflow-hidden z-[1] bg-[#B2A0F8] rounded w-full min-h-[430px] flex flex-col items-center gap-y-6 pt-8 px-[70px] lg:rounded-2xl lg:p-20">
        {/* Mobile Templates Scroll */}
        <div className="relative w-[190px] h-[265px] mb-6 lg:hidden">
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 50, damping: 20 },
                opacity: { duration: 0.5 },
              }}
              className="absolute w-full h-full "
            >
              <Image
                src={templates[currentIndex].img}
                alt="template cv"
                className="w-full h-full"
              />
              <p className="text-xs text-center font-bold text-[#FAFAFA] mt-3 lg:text-base lg:mt-4 2xl:text-lg">
                {templates[currentIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="hidden mb-6 lg:flex lg:mb-20 lg:gap-x-14">
          <div className="w-[190px] h-[265px] lg:w-auto lg:h-auto">
            <Image
              src={template1}
              alt="template cv"
              className="w-full h-full"
            />
            <p className="text-xs text-center font-bold text-[#FAFAFA] mt-3 lg:text-base lg:mt-4 2xl:text-lg">
              Simple Resume Template
            </p>
          </div>

          <div className="w-[190px] h-[265px] lg:w-auto lg:h-auto">
            <Image
              src={template2}
              alt="template cv"
              className="w-full h-full"
            />
            <p className="text-xs text-center font-bold text-[#FAFAFA] mt-3 lg:text-base lg:mt-4 2xl:text-lg">
              Creative Resume Template
            </p>
          </div>

          <div className="w-[190px] h-[265px] lg:w-auto lg:h-auto">
            <Image
              src={template3}
              alt="template cv"
              className="w-full h-full"
            />
            <p className="text-xs text-center font-bold text-[#FAFAFA] mt-3 lg:text-base lg:mt-4 2xl:text-lg">
              Professional Resume Template
            </p>
          </div>
        </div>

        <Button text={"Discover Other Resume Templates"} />
        <div className="w-full absolute top-[45%] px-4 flex justify-between cursor-pointer lg:hidden">
          <Image
            src={circleArrow}
            alt="arrow-left"
            className="to rotate-180"
            onClick={handlePrevTemplate}
          />
          <Image
            src={circleArrow}
            alt="arrow-right"
            onClick={handleNextTemplate}
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
