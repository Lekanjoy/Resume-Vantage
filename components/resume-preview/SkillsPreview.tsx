import { resumeDataProps } from "@/types";

const SkillsPreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="skills">
      <h2 className="text-[8px] font-bold mb-1 text-center text-blue-900 border-y border-blue-900">
        SKILLS
      </h2>
      <div className="flex flex-wrap gap-[2px]">
        {resumeData?.skills?.map((skill, index) => {
          return (
            <p
              key={index}
              className="bg-blue-900 text-white text-[8px] px-2 py-[2px] rounded"
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
