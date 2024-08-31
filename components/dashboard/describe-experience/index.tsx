import SearchBox from "./SearchBox";
import RichTextEditor from "../editor";
import Button, { ButtonProps as DescriptionProps } from "../button";
import { useTypedSelector } from "@/store/store";


export type selectedResult = {
  id: number;
  text: string;
};

const ExperienceDescription = ({
  currentIndex,
  handlePrev,
  handleNext,
}: DescriptionProps) => {

  const experiences = useTypedSelector((store) => store.resume.experience);
  const currentEditingIndex = useTypedSelector((state) => state.resume.currentEditingIndex);

  const role = currentEditingIndex !== null
    ? experiences[currentEditingIndex].title
    : "Product Designer";

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-12">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          Describe what you did as a {role}
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          Pick from our AI-recommended phrases below or create yours.
        </p>
      </div>

      <div className="w-full flex justify-between flex-col gap-y-10 lg:flex-row lg:gap-x-5 xl:gap-x-8">
        <SearchBox
          role={role}
        />
        <RichTextEditor/>
      </div>
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </>
  );
};

export default ExperienceDescription;
