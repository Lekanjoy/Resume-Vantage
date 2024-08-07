import React from "react";

const SkillsPreview = ({ resumeData }) => {
  return (
    <div className="skills">
      <h2 className="text-xs font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
        SKILLS
      </h2>
      <div className="flex flex-wrap gap-2">
        {resumeData?.skills?.map((skill, index) => {
          return (
            <p
              key={index}
              className="bg-blue-900 text-white text-xs px-2 py-[2px] rounded"
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
