import { resumeData } from "@/data";

const SimpleTemplate = () => {
  return (
    <section className="bg-white max-w-[8.5in] rounded-md p-8 flex flex-col">
      <div className="header mb-5 flex justify-between gap-x-8 w-full">
        <div className="max-w-3/5 text-blue-900">
          <h1 className="font-semibold text-xl">{resumeData.name}</h1>
          <p className="text-gray-500 text-sm font-normal mb-2">
            {resumeData.title}
          </p>
          <p className="text-blue-950 font-semibold text-xs leading-tight">
            {resumeData.summary}
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-xs">{resumeData.email}</p>
          <p className="text-xs">{resumeData.phone}</p>
          <p className="text-xs">{resumeData.location}</p>
        </div>
      </div>

      <div className="skills">
        <h2 className="text-lg font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
          SKILLS
        </h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => {
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

      <div className="experience mt-5">
        <h3 className="text-lg font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
          WORK EXPERIENCE
        </h3>
        {resumeData.experience.map((exp, index) => {
          return (
            <div key={index} className="text-blue-950 mb-4">
              <h4 className="text-lg font-bold ">{exp.title}</h4>
              <p className="text-sm font-semibold mb-1">{exp.company}</p>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <p>{exp.dates}</p>
                <p>{exp.location}</p>
              </div>
              {exp.description.map((desc, id) => {
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

      <div className="education mt-5">
        <h3 className="text-lg font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
          EDUCATION
        </h3>
        {resumeData.education.map((edu, index) => {
          return (
            <div key={index} className="flex flex-col mb-4">
              <h4 className="text-lg font-bold ">{edu.degree}</h4>
              <p className="text-sm font-semibold mb-1">{edu.institution}</p>
              <p className="mt-1 text-xs text-gray-400">{edu.dates}</p>
            </div>
          );
        })}
      </div>

      <div className="details mt-5">
        <h3 className="text-lg font-bold mb-2 text-center text-blue-900 border-y border-blue-900">
          CERTIFICATIONS
        </h3>
        {resumeData.certifications.map((det, index) => {
          return (
            <div key={index} className="flex flex-col mb-4">
              <h4 className="text-lg font-bold ">{det.title}</h4>
              <p className="text-sm font-semibold mb-[2px]">
                {det.institution}
              </p>
              <p className="mt-1 text-xs text-gray-400">{det.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SimpleTemplate;
