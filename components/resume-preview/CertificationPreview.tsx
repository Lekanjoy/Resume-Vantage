import { resumeDataProps } from "@/types";

const CertificationPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="details mt-5">
      <h3 className="text-xs font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
        CERTIFICATIONS
      </h3>
      {resumeData?.certifications?.map((det, index) => {
        return (
          <div key={index} className="flex flex-col mb-4">
            <h4 className="text-lg font-bold ">{det.title}</h4>
            <p className="text-sm font-semibold mb-[2px]">{det.institution}</p>
            <p className="mt-1 text-xs text-gray-400">{det.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CertificationPreview;
