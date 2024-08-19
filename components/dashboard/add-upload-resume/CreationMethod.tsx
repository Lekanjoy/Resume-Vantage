import { Suspense } from "react";
import CreateOrUpload from "./CardWrapper";
import { ButtonProps as CreationMethodProps } from "../button";

const CreationMethod = ({
  currentIndex,
  handlePrev,
  handleNext,
}: CreationMethodProps) => {
  return (
    <Suspense fallback={"<div>Loading</div>"}>
      <CreateOrUpload
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </Suspense>
  );
};

export default CreationMethod;
