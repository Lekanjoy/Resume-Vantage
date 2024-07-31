"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import template1 from "@/public/assets/landing-page/template-1.png";
import template2 from "@/public/assets/landing-page/template-2.png";
import template3 from "@/public/assets/landing-page/template-3.png";
import { animate } from "framer-motion";
import Button from "@/components/button";
import arrow from "@/public/assets/landing-page/arrowIcon.svg";

function TemplatesList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const card = document.querySelector<HTMLDivElement>(".resume");
    const handleResize = () => {
      if (card) {
        setContainerWidth(card.offsetWidth);
      }
    };

    // Initial width measurement
    handleResize();

    // Add event listener for window resize to update the width
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (target: number) => {
    const container = containerRef.current;
    if (container) {
      animate(container.scrollLeft, target, {
        type: "spring",
        stiffness: 60,
        damping: 20,
        onUpdate: (value) => {
          container.scrollLeft = value;
        },
      });
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const target = container.scrollLeft + containerWidth + 12;
      scrollTo(target);
    }
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const target = container.scrollLeft - containerWidth + 12;
      scrollTo(target);
    }
  };

  return (
    <div className="mt-14 flex flex-col justify-center items-center gap-y-4 lg:gap-y-10 xl:mt-20">
      <h2 className="text-[#292B2F] self-start font-semibold text-lg lg:text-3xl">
        Resume Templates
      </h2>
      <div className="w-full flex items-center gap-x-4">
        <div
          onClick={scrollLeft}
          className="bg-[#72767D] rounded-full  min-w-[24px] min-h-[24px] p-2  cursor-pointer"
        >
          <Image
            src={arrow}
            alt="Arrow left"
            className="w-full h-full rotate-[270deg]"
          />
        </div>

        <div
          id="container"
          ref={containerRef}
          className="w-full overflow-x-hidden flex justify-between items-center gap-x-3 lg:gap-x-8 2xl:gap-x-14"
        >
          <div className="resume min-w-[240px] max-h-[340px] rounded-xl border p-4 border-[#C5B8FA]  ">
            <Image src={template1} alt="template" className="w-full h-full"/>
          </div>
          <div className="resume min-w-[240px] max-h-[340px] rounded-xl border p-4 border-[#C5B8FA]  ">
            <Image src={template2} alt="template" className="w-full h-full"/>
          </div>
          <div className="resume min-w-[240px] max-h-[340px] rounded-xl border p-4 border-[#C5B8FA]  ">
            <Image src={template3} alt="template" className="w-full h-full"/>
          </div>
          <div className="resume min-w-[240px] max-h-[340px] rounded-xl border p-4 border-[#C5B8FA]  ">
            <Image src={template1} alt="template" className="w-full h-full"/>
          </div>
          <div className="resume min-w-[240px] max-h-[340px] rounded-xl border p-4 border-[#C5B8FA]  ">
            <Image src={template2} alt="template" className="w-full h-full"/>
          </div>
        </div>

        <div
          onClick={scrollRight}
          className="bg-primaryColor rounded-full min-w-[24px] min-h-[24px] p-2 cursor-pointer"
        >
          <Image src={arrow} alt="Arrow right" className="w-full h-full" />
        </div>
      </div>

      <Button
        text="Create My Resume"
        bgColor={"bg-primaryColor"}
        textColor={"text-white"}
        stroke={"#FFFFFF"}
      />
    </div>
  );
}

export default TemplatesList;
