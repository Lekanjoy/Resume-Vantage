import Image from "next/image";
import avatar from "@/public/assets/landing-page/Dayflow Avatar.png";

const Card = () => {
  return (
    <div className="flex flex-col items-start gap-y-2 min-w-[250px] min-h-[150px] rounded-xl border p-4 border-[#C5B8FA]/70 bg-white lg:gap-y-6 lg:px-5 lg:py-6">
      <div className="flex gap-x-4 items-center lg:gap-x-6">
        <Image src={avatar} alt={"avatar"} width={55} height={55} />
        <div className="flex flex-col gap-y-[2px]">
          <p className="text-sm font-bold text-secondary lg:text-base">Flourish Ralph</p>
          <p className="text-[#4F545C] text-xs lg:text-sm">
            Product Designer at Microsoft
          </p>
        </div>
      </div>
      <p className="text-[#4F545C] text-xs lg:text-sm">
        “Creating a resume has never been this intuitive, it is such a creative
        process. The templates are not just modern, they are visually appealing
        and can be customized however I want. The AI feedback surprised me - it
        caught things I hadn’t even considered and the suggestions gave my
        resume an extra polish. Thanks to ResumeVantage, I landed my dream job.”
      </p>
    </div>
  );
};

export default Card;
