import { resumeDataProps } from "@/types";

const ExperiencePreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="experience mt-2">
      <h3 className="text-[8px] font-bold mb-1 text-center text-blue-900 border-y border-blue-900">
        WORK EXPERIENCE
      </h3>
      {resumeData?.experience?.map((exp, index) => {
        return (
          <div key={index} className="text-blue-950 mb-1">
            <h4 className="text-xs font-medium ">{exp.title}</h4>
            <p className="text-[8px] font-medium mb-1">{exp.company}</p>
            <div className="flex justify-between text-[8px] text-gray-400 mb-1">
              <p>{exp.dates}</p>
              <p>{exp.location}</p>
            </div>
            {exp?.description?.map((desc, id) => {
              return (
                <div key={id} className="flex flex-col gap-y-[1px]">
                  <p className="text-[8px]">- {desc}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePreview;
