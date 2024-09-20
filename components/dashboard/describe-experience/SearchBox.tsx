import Image from "next/image";
import searchIcon from "@/public/assets/dashboard/searchIcon.svg";
import Result from "./Result";
import { useTypedSelector } from "@/store/store";
import lockedIcon from "@/public/assets/dashboard/lock.svg";

interface searchResultProps {
  role: string;
}

const SearchResults = ({ role }: searchResultProps) => {
  const experiences = useTypedSelector((store) => store.resume.experience);
  const currentEditingIndex = useTypedSelector(
    (state) => state.resume.currentEditingIndex
  );
  const resultData = useTypedSelector((store) => store.suggestions);
  const rawExperienceSuggestions =
    experiences[currentEditingIndex!]?.rawResponsibilities?.responsibilities;

  const isPaidUser = false;
  const AISuggestions =
    resultData.length < 1 ? rawExperienceSuggestions : resultData;
  const displayedResults = isPaidUser
    ? AISuggestions
    : AISuggestions?.slice(0, 3);

  return (
    <div className="components-dashboard-describe-experience-SearchResults w-full bg-[#F7F5FE] p-5 h-[400px] overflow-x-auto border border-[#B9BBBE] rounded lg:h-[600px] lg:rounded-md lg:w-1/2 xl:p-8">
      <div className="w-full search flex flex-col gap-y-1">
        <p className="text-xs text-[#4F545C] lg:text-sm">
          Search using your job title
        </p>
        <div className="w-full relative">
          <input
            type="search"
            placeholder="Job title, industry, or keyword"
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
          Showing {AISuggestions.length} search results for{" "}
          <span className="font-bold">{role}</span>
        </p>

        <div className="flex flex-col gap-y-2 lg:gap-y-3">
          {displayedResults?.map((result) => (
            <Result key={result} result={result} />
          ))}

          {!isPaidUser &&
            AISuggestions.length > 2 &&
            Array.from({ length: AISuggestions.length - 2 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between gap-x-2 p-4 bg-[#E6E6E6] w-full cursor-not-allowed border border-[#B9BBBE] rounded-sm lg:rounded-md  xl:p-5 xl:gap-x-6"
              >
                <div className="flex items-center justify-center self-center min-w-7 min-h-7 bg-[#B9BBBE] rounded-full ease-in-out duration-300 xl:min-w-10 xl:min-h-10">
                  <Image
                    src={lockedIcon}
                    alt="Locked Icon"
                    className="w-4 h-4 lg:w-fit lg:h-fit"
                  />
                </div>
                <p className=" text-[#A0A3A7] text-xs md:text-sm">
                  Select any of our paid plans to continue using this feature.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
