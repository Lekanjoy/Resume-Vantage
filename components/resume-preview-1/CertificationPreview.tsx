import { resumeDataProps } from "@/types";

const CertificationPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="mt-1">
      {resumeData?.certifications?.length > 0 && (
        <h3 className="text-[6px] font-bold mb-[1px] text-center text-blue-900 border-y border-blue-900/40">
          CERTIFICATIONS
        </h3>
      )}
      {resumeData?.certifications?.map((det, index) => {
        return (
          <div key={index} className="flex flex-col mb-[1px]">
            <h4 className="text-[8px] font-medium ">{det.title}</h4>
            <p className="text-[6px] font-medium mb-[1px]">{det.institution}</p>
            <p className="text-[6px] text-gray-400">{det.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CertificationPreview;
