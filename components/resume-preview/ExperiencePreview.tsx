import { resumeDataProps } from "@/types";

const ExperiencePreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="experience mt-5">
      <h3 className="text-xs font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
        WORK EXPERIENCE
      </h3>
      {resumeData?.experience?.map((exp, index) => {
        return (
          <div key={index} className="text-blue-950 mb-4">
            <h4 className="text-lg font-bold ">{exp.title}</h4>
            <p className="text-sm font-semibold mb-1">{exp.company}</p>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <p>{exp.dates}</p>
              <p>{exp.location}</p>
            </div>
            {exp?.description?.map((desc, id) => {
              return (
                <div key={id} className="flex flex-col gap-y-1">
                  <p className="text-xs">- {desc}</p>
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
