import spinner from "@/public/assets/auth/spinner.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  currentIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  loading?: boolean;
}

const Button = ({
  currentIndex,
  handlePrev,
  handleNext,
  loading,
}: ButtonProps) => {
  const disablePrev = currentIndex === 1;
  return (
    <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:justify-between">
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className={twMerge(
            "bg-[#FAFAFA] text-primaryColor border border-primaryColor p-4 rounded-md w-full ease-in-out duration-300 lg:max-w-[330px] hover:shadow-md ",
            disablePrev ? "cursor-not-allowed" : "cursor-pointer"
          )}
          disabled={disablePrev}
        >
          Back
        </button>
      )}

      <button
        onClick={handleNext}
        className="flex items-center justify-center gap-x-1 bg-primaryColor text-white p-4 rounded-md w-full ease-in-out duration-300 lg:max-w-[330px] disabled:bg-primaryColor-100 disabled:cursor-not-allowed"
        disabled={loading}
      >
        <span>Continue</span>
        {loading && <Image src={spinner} alt="spinner" className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default Button;
