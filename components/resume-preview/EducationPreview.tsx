import { resumeDataProps } from "@/types";

const EducationPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="education mt-5">
      <h3 className="text-xs font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
        EDUCATION
      </h3>
      {resumeData?.education?.map((edu, index) => {
        return (
          <div key={index} className="flex flex-col mb-4">
            <h4 className="text-lg font-bold ">{edu.degree}</h4>
            <p className="text-sm font-semibold mb-1">{edu.institution}</p>
            <p className="mt-1 text-xs text-gray-400">{edu.dates}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;
