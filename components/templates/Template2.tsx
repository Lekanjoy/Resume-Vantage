import { resumeData } from "@/data";

const Template2 = () => {
  const {
    fname,
    lname,
    title,
    email,
    phone,
    careerSummary,
    experience,
    education,
    skills,
  } = resumeData;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      {/* Header */}
      <div className="border-b pb-4 mb-6">
        <h1 className="text-4xl font-bold">{fname + " " + lname}</h1>
        <h2 className="text-xl text-gray-600">{title}</h2>
        <div className="text-gray-500">
          {email} | {phone}{" "}
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Summary</h3>
        <p className="text-gray-700">{careerSummary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Experience</h3>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold">{job.jobTitle}</h4>
            <div className="text-gray-500">
              {job.company} | {job.startDate} - {job.endDate}
            </div>
            {job?.responsibilities?.responsibilities?.map((desc, id) => {
              return (
                <div key={id} className="flex flex-col gap-y-1">
                  <p className="text-xs">- {desc}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold">{edu.degreeType} in {edu.studyField}</h4>
            <div className="text-gray-500">
              {edu.schoolName} | {edu.gradDate}
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template2;
