import { resumeDataProps } from "@/types";

const EducationPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="education mt-2">
      <h3 className="text-[8px] font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
        EDUCATION
      </h3>
      {resumeData?.education?.map((edu, index) => {
        return (
          <div key={index} className="flex flex-col mb-1">
            <h4 className="text-xs font-medium ">{edu.degree}</h4>
            <p className="text-[8px] font-medium mb-[1px]">{edu.institution}</p>
            <p className="text-[8px] text-gray-400">{edu.dates}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;
