import Image from "next/image";
import searchIcon from "@/public/assets/dashboard/searchIcon.svg";
import Result from "./Result";
import { resultData } from "@/data";
import { selectedResult } from ".";
import { Dispatch, SetStateAction } from "react";

interface searchResultProps {
  role: string;
  selectedResults:  selectedResult[];
  setIsSelectedResults:  Dispatch<SetStateAction<selectedResult[]>>;
}


const SearchResults = ({ role, setIsSelectedResults }: searchResultProps) => {
  return (
    <div className="w-full bg-[#F7F5FE] p-5 h-[400px] overflow-x-auto border border-[#B9BBBE] rounded lg:h-[600px] lg:rounded-md lg:w-1/2 xl:p-8">
      <div className="w-full search flex flex-col gap-y-1">
        <p className="text-xs text-[#4F545C] lg:text-sm">
          Search using your job title
        </p>
        <div className="w-full relative">
          <input
            type="search"
            placeholder="Job title, industry, or keyword "
            className="w-full p-2 rounded border border-[#B9BBBE]/65 shadow-[0_0.656px_1.312px_0_rgba(16,24,40,0.05)] bg-transparent text-xs text-[#B9BBBE] outline-none md:text-sm lg:px-3 lg:shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          />
          <Image
            src={searchIcon}
            alt="Search Icon"
            className="absolute right-2 top-[30%] lg:right-3"
          />
        </div>
      </div>
      <div className="results mt-4 lg:mt-6">
        <p className="text-xs my-4  md:text-sm lg:my-6">
          Showing 16 search results for{" "}
          <span className="font-bold">{role}</span>
        </p>

        <div className="flex flex-col gap-y-2 lg:gap-y-3">
          {resultData.map((result) => (
            <Result key={result.id} result={result} setIsSelectedResults={setIsSelectedResults}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
