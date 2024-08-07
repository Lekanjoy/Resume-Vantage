import { resumeDataProps } from "@/types";

const PreviewHeader = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="mb-5 flex justify-between gap-x-2 w-full">
      <div className="w-3/5 text-blue-900">
        <h1 className="font-semibold text-xs">{resumeData.name}</h1>
        <p className="text-gray-500 text-xs font-normal mb-2">
          {resumeData.title}
        </p>
        <p className="text-blue-950 font-semibold text-[8px] leading-tight">
          {resumeData.summary}
        </p>
      </div>
      <div className="w-2/5 flex flex-col gap-y-1">
        <p className="text-[8px]">{resumeData.email}</p>
        <p className="text-[8px]">{resumeData.phone}</p>
        <p className="text-[8px]">{resumeData.location}</p>
      </div>
    </div>
  );
};

export default PreviewHeader;
