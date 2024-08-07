import React, { useState } from "react";
import SearchBox from "./SearchBox";
import RichTextEditor from "../editor";

export type selectedResult = {
  id: number;
  text: string;
}

const ExperienceDescription = () => {
  const role = "Product Designer";

  const [selectedResults, setSelectedResults] = useState<selectedResult[]>([])
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
        <SearchBox role={role} setIsSelectedResults={setSelectedResults} selectedResults={selectedResults}/>
        <RichTextEditor selectedResults={selectedResults}/>
      </div>
    </>
  );
};

export default ExperienceDescription;
