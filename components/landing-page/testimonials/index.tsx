"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import Button from "@/components/button";
import Card from "./card";
import arrow from "@/public/assets/landing-page/arrowIcon.svg";

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const card = document.querySelector<HTMLDivElement>(".card");
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
    <section className=" w-full my-20 flex flex-col justify-center items-center gap-y-6 lg:gap-y-10 2xl:gap-y-12">
      <div className="flex flex-col justify-center items-center text-center gap-y-6 lg:gap-y-8 2xl:gap-y-12">
        <h5 className="text-2xl text-secondary font-bold leading-[24px] lg:text-6xl  lg:leading-[60px] 2xl:text-8xl 2xl:leading-[96px]">
          <span className="font-semibold text-primary-100">Resume</span>
          <span className="text-primary">Vantage. </span> Endorsed by the
          Community, Celebrated by Professionals
        </h5>
        <p className="text-secondary-100 font-medium lg:text-xl lg:font-semibold lg:max-w-[700px]">
          Join the ranks of{" "}
          <span className="font-semibold text-primary-100">Resume</span>
          <span className="text-primary">Vantage. </span> users landing
          positions at the world’s leading companies. Our platform, approved by
          recruiters and loved by job seekers, is more than a resume maker -
          it’s a career catalyst.
        </p>
      </div>
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div
          onClick={scrollRight}
          className="bg-primary rounded-full min-w-[24px] min-h-[24px] p-2 cursor-pointer"
        >
          <Image src={arrow} alt="Arrow right" className="w-full h-full" />
        </div>
      </div>

      <Button
        text="Try It Out Yourself"
        bgColor={"bg-primary"}
        textColor={"text-white"}
        stroke={"#FFFFFF"}
      />
    </section>
  );
};

export default Testimonials;
