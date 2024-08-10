import { resumeDataProps } from "@/types";

const PreviewHeader = ({ resumeData }: resumeDataProps) => {
  const fullName = resumeData.fname + ' ' + resumeData.lname;
  const location = resumeData.city + ', ' + resumeData.country;

  return (
    <div className="mb-1 flex justify-between gap-x-3 w-full">
      <div className=" text-blue-900">
        <h1 className="font-semibold text-[8px]">{fullName}</h1>
        <p className="text-gray-500 text-[6px] font-normal mb-[1px]">
          {resumeData.title}
        </p>
        <p className="text-blue-950 font-medium text-[6px] leading-tight">
          {resumeData.summary}
        </p>
      </div>
      <div className=" flex flex-col gap-y-[1px]">
        <p className="text-[6px]">{resumeData.email}</p>
        <p className="text-[6px]">{resumeData.phone}</p>
        <p className="text-[6px]">{location}</p>
      </div>
    </div>
  );
};

export default PreviewHeader;
