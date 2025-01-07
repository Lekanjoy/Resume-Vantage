import { resumeDataProps } from "@/types";

const PreviewHeader = ({ resumeData }: resumeDataProps) => {
  const fullName = resumeData.fname + ' ' + resumeData.lname;
  const location = resumeData.city + ', ' + resumeData.country;

  return (
    <div className="mb-1 w-full">
      <div className="w-full flex justify-between gap-x-3">
        <div className=" text-blue-900">
          <h1 className="font-semibold text-[8px]">{fullName}</h1>
          <p className="text-gray-500 text-[6px] font-normal mb-[1px]">
            {resumeData.title}
          </p>
        </div>
        <div className=" flex flex-col gap-y-[1px]">
          <p className="text-[6px]">{resumeData.email}</p>
          <p className="text-[6px]">{resumeData.phone}</p>
          <p className="text-[6px]">{location}</p>
        </div>
      </div>

      <p className="mt-1 w-full text-blue-950 font-medium text-[6px] leading-tight">
          {resumeData.careerSummary}
        </p>
    </div>
  );
};

export default PreviewHeader;
