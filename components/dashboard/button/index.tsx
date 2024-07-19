interface ButtonProps {
  currentIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const Button = ({ currentIndex, handlePrev, handleNext }: ButtonProps) => {
  return (
    <div className="w-full flex flex-col gap-y-6 lg:flex-row lg:justify-between">
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="bg-[#FAFAFA] text-primary border border-primary p-4 rounded-md w-full ease-in-out duration-300 lg:max-w-[330px]  hover:shadow-md"
        >
          Back
        </button>
      )}

      <button
        onClick={handleNext}
        className="bg-primary text-white p-4 rounded-md w-full ease-in-out duration-300  lg:max-w-[330px] hover:bg-primary-100"
      >
        Continue
      </button>
    </div>
  );
};

export default Button;
