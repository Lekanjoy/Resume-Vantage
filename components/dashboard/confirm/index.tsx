import React from "react";
import Button, { ButtonProps as ConfirmProps } from "../button";

const Confirm = ({ currentIndex, handleNext, handlePrev }: ConfirmProps) => {
  return (
    <div>
      Confirm
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default Confirm;
