import { resumeDataProps } from "@/types";

const SkillsPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="skills">
      {resumeData?.skills?.length > 0 && (
        <h2 className="text-[6px] font-bold mb-1 text-center text-blue-900 border-y border-blue-900/40">
          SKILLS
        </h2>
      )}
      <div className="flex flex-wrap gap-[1px]">
        {resumeData?.skills?.map((skill, index) => {
          return (
            <p
              key={index}
              className="bg-blue-900 text-white text-[6px] px-1 py-[1px] rounded"
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPreview;
