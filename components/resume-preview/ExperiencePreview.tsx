import { resumeDataProps } from "@/types";

const ExperiencePreview = ({ resumeData }: resumeDataProps) => {
  return (
    <div className="mt-1">
      {resumeData?.experience?.length > 0 && (
        <h3 className="text-[6px] font-bold mb-1 text-center text-blue-900 border-y border-blue-900/40">
          WORK EXPERIENCE
        </h3>
      )}
      {resumeData?.experience?.map((exp, index) => {
        return (
          <div key={exp._id} className="text-blue-950 mb-[2px]">
            <h4 className="text-[8px] font-semibold ">{exp.jobTitle}</h4>
            <p className="text-[6px] font-medium mb-[1px]">{exp.company}</p>
            <div className="flex justify-between text-[6px] text-gray-400 mb-[1px]">
              <p>{`${exp.startDate} - ${exp.endDate}`}</p>
              <p>{`${exp.city} - ${exp.country}`}</p>

            </div>
            {exp?.responsibilities?.responsibilities?.map((desc, id) => {
              return (
                <div key={id} className="flex flex-col gap-y-[1px]">
                  <p className="text-[6px]">- {desc}</p>
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
