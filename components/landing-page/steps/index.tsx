import Image from "next/image";
import Button from "@/components/button";
import book1 from "@/public/assets/landing-page/Isometric Stickers Books.png";
import book2 from "@/public/assets/landing-page/Isometric Stickers Book.png";
import book3 from "@/public/assets/landing-page/Isometric Stickers Kanban Board.png";
import arrow3 from "@/public/assets/landing-page/Arrow 3.png";
import arrow4 from "@/public/assets/landing-page/Arrow 4.png";

const Steps = () => {
  return (
    <section className="flex flex-col gap-y-12 items-center justify-center mb-[72px] lg:mb-24">
      <div className="flex flex-col items-center justify-center text-center gap-y-6 lg:max-w-[750px]">
        <h4 className="text-xl text-secondary font-bold leading-[24px] lg:text-5xl lg:max-w-[637px]">
          Create The Perfect Resume in 3 Steps
        </h4>
        <p className="text-secondary-100 font-medium text-sm lg:text-xl lg:font-semibold ">
          Crafting perfection made simple. Choose, customize, optimize - your
          journey to creating an impressive resume in just three seamless steps,
          now enhanced by AI.
        </p>
        <Button text="Create My Resume" />
      </div>

      <div className="w-full flex flex-col gap-y-14 lg:gap-y-[96px]">
        <div className="flex gap-x-3 justify-between lg:gap-x-12">
          <div className="flex gap-x-4 items-center lg:gap-x-16">
            <div className=" w-[95px] h-[95px] lg:w-[360px] lg:h-[360px]">
              <Image src={book1} alt="book" className="w-full h-full" />
            </div>
            <div className="flex gap-x-2 font-bold text-right lg:gap-x-8 2xl:gap-x-10">
              <p className="text-[#9747FF] text-4xl lg:text-8xl 2xl:text-9xl">
                01
              </p>
              <p className="text-xs text-secondary-100 whitespace-nowrap lg:text-2xl 2xl:text-3xl">
                Sign up and pick <br /> a template
              </p>
            </div>
          </div>

          <div className="relative w-[102px] h-[102px] pt-12 lg:w-[256px] lg:h-[256px] lg:top-[90px]">
            <Image src={arrow3} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-x-3 justify-between lg:gap-x-12">
          <div className="flex flex-row-reverse gap-x-4 items-center lg:gap-x-16">
            <div className="w-[95px] h-[95px] lg:w-[360px] lg:h-[360px]">
              <Image src={book2} alt="book" className="w-full h-full" />
            </div>
            <div className="flex gap-x-2 font-bold text-right lg:gap-x-8 2xl:gap-x-10">
              <p className="text-[#9747FF] text-4xl lg:text-8xl 2xl:text-9xl">
                02
              </p>
              <p className="text-xs text-secondary-100 whitespace-nowrap lg:text-2xl 2xl:text-3xl">
                Customize your resume <br /> using AI
              </p>
            </div>
          </div>

          <div className="relative w-[102px] h-[102px] pt-12 lg:w-[256px] lg:h-[256px] lg:top-[100px]">
            <Image src={arrow4} alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex justify-between gap-x-4 items-center lg:gap-x-16 lg:justify-normal">
          <div className="w-[135px] h-[135px] lg:w-[360px] lg:h-[360px]">
            <Image src={book3} alt="book" className="w-full h-full" />
          </div>
          <div className="flex gap-x-2 font-bold text-right lg:gap-x-8 2xl:gap-x-10">
            <p className="text-[#9747FF] text-4xl lg:text-8xl 2xl:text-9xl">
              03
            </p>
            <p className="text-xs text-secondary-100 lg:text-2xl 2xl:text-3xl">
              Download in your <br /> desired format!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
