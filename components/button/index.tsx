import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/assets/landing-page/arrowIcon.svg";

const Button = ({ text }: { text: string }) => (
  <Link
    href="/signup"
    className="w-fit flex items-center gap-x-2 py-3 px-5 bg-primary rounded-md text-white ease-in-out duration-300 lg:hover:bg-primary-100"
  >
    <span className={`text-sm font-semibold lg:text-lg 2xl:text-xl`}>
      {text}
    </span>
    <Image src={arrow} alt="arrow Icon" />
  </Link>
);

export default Button;
