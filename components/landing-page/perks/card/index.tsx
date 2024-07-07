import Image, { StaticImageData } from "next/image";

interface cardProps {
  text: string;
  img: StaticImageData;
  bgColor: string;
  innerColor: string;
}

const Card = ({ text, img, bgColor, innerColor }: cardProps) => {
  return (
    <div
      className={`${bgColor} rounded-md py-[6.2px] px-[7.3px] lg:p-5 lg:rounded-2xl`}
    >
      <div
        className={`flex flex-col gap-y-2 justify-center px-6 pt-4 pb-[1px] ${innerColor} rounded-md lg:px-12 lg:pt-6 lg:pb-[2px] lg:rounded-2xl 2xl:px-[68px] 2xl:pt-12`}
      >
        <p className="text-xs font-bold text-[#2C2F33] text-center lg:text-lg">
          {text}
        </p>
        <Image src={img} alt={text} />  
      </div>
    </div>
  );
};

export default Card;
