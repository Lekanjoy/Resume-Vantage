import Link from "next/link";
import ArrowIcon from "../icon/ArrowIcon";

const Button = ({
  text,
  bgColor,
  textColor,
  stroke,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  stroke: string;
}) => (
  <Link
    href="auth/sign-up"
    className={`whitespace-nowrap w-fit flex items-center gap-x-2 py-3 px-5 ${bgColor} rounded-md ${textColor} ease-in-out duration-300 lg:hover:opacity-80`}
  >
    <span
      className={`text-xs font-semibold lg:text-base sm:text-sm 2xl:text-lg`}
    >
      {text}
    </span>
    <ArrowIcon stroke={stroke} />
  </Link>
);

export default Button;
