import { resumeDataProps } from "@/types";

const PreviewHeader = ({ resumeData }: resumeDataProps) => {
  const fullName = resumeData.fname + ' ' + resumeData.lname;
  const location = resumeData.city + ', ' + resumeData.country;

  return (
    <div className="mb-2 flex justify-between gap-x-2 w-full">
      <div className="w-3/5 text-blue-900">
        <h1 className="font-semibold text-xs">{fullName}</h1>
        <p className="text-gray-500 text-[8px] font-normal mb-[1px]">
          {resumeData.title}
        </p>
        <p className="text-blue-950 font-medium text-[8px] leading-tight">
          {resumeData.summary}
        </p>
      </div>
      <div className="w-2/5 flex flex-col gap-y-[1px]">
        <p className="text-[8px]">{resumeData.email}</p>
        <p className="text-[8px]">{resumeData.phone}</p>
        <p className="text-[8px]">{location}</p>
      </div>
    </div>
  );
};

export default PreviewHeader;
