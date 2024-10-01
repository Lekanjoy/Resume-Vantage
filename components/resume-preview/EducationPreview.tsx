import { resumeDataProps } from "@/types";

const EducationPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="education mt-[2px]">
      {resumeData?.education?.length > 0 && (
        <h3 className="text-[6px] font-bold mb-[1px] text-center text-blue-900 border-y border-blue-900/40">
          EDUCATION
        </h3>
      )}
      {resumeData?.education?.map((edu, index) => {
        return (
          <div key={index} className="flex flex-col mb-[1px]">
            <h4 className="text-[8px] font-medium ">{edu.degreeType} in {edu.studyField}</h4>
            <p className="text-[6px] font-medium mb-[1px]">{edu.schoolName}</p>
            <p className="text-[6px] text-gray-400"> {edu.startDate} {edu.stillEnrolled ? "-" : ""} {edu.gradDate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;
