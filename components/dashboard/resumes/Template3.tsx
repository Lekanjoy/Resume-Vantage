import { resumeDataProps } from "@/types";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Languages,
} from "lucide-react";

const Template3 = ({ resumeData }: resumeDataProps) => {
  const fullName = resumeData.fname + " " + resumeData.lname;
  const location = resumeData.city + ", " + resumeData.country;

  return (
    <section className="bg-white h-[300px] overflow-y-auto scrollbar-hide max-w-[200px] p-1 flex flex-col lg:min-w-full">
      <div className="space-y-3 text-[6px]">
        {/* Header Section */}
        <div className="bg-blue-600 text-white p-2 rounded-md">
          <h1 className="text-[8px] font-bold">{fullName}</h1>
          <h2 className="text-[8px]">{resumeData?.title}</h2>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-between text-[6px] bg-white p-2 rounded-md shadow">
          {resumeData?.email.length > 0 && (
            <div className="flex items-center gap-1">
              <Mail className="w-2 h-2" />
              <span>{resumeData?.email}</span>
            </div>
          )}
          {resumeData?.phone.length > 0 && (
            <div className="flex items-center gap-1">
              <Phone className="w-2 h-2" />
              <span>{resumeData?.phone}</span>
            </div>
          )}
          {location.length > 0 && (
            <div className="flex items-center gap-1">
              <MapPin className="w-2 h-2" />
              <span>{location}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Linkedin className="w-2 h-2" />
            <span>linkedin.com/in/john.doe</span>
          </div>
        </div>

        {/* Professional Summary */}
        {resumeData?.careerSummary.length > 0 && (
          <div className="bg-white p-2 rounded-md shadow">
            <h3 className="text-[8px] font-bold mb-1 text-blue-600">
              Professional Summary
            </h3>
            <p className="text-[6px]">{resumeData?.careerSummary}</p>
          </div>
        )}

        {/* Work Experience */}
        {resumeData?.experience.length > 0 && (
          <div className="bg-white p-2 rounded-md shadow">
            <h3 className="text-[8px] font-bold mb-1 flex items-center gap-1 text-blue-600">
              <Briefcase className="w-3 h-3" /> Work Experience
            </h3>
            <div className="space-y-1">
              {resumeData?.experience?.map((exp, index) => {
                return (
                  <div key={exp._id}>
                    <h4 className="text-[8px] font-bold">{exp.jobTitle}</h4>
                    <p className="text-[6px] text-gray-600">
                      {exp.company} | {`${exp.city}, ${exp.country}`}
                    </p>
                    <p className="text-[6px] text-gray-500">{`${exp.startDate} - ${exp.endDate}`}</p>
                    <ul className="list-disc list-inside space-y-1 mt-1">
                      {exp?.responsibilities?.responsibilities?.map(
                        (desc, id) => {
                          return (
                            <li key={id} className="text-[6px]">
                              {desc}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="bg-white p-2 rounded-md shadow">
            <h3 className="text-[8px] font-bold mb-1 flex items-center gap-1 text-blue-600">
              <Award className="w-3 h-3" /> Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {resumeData.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-[2px]">
                  <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                  <span className="text-[6px]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="bg-white p-2 rounded-md shadow">
            <h3 className="text-[8px] font-bold mb-1 flex items-center gap-1 text-blue-600">
              <GraduationCap className="w-3 h-3" /> Education
            </h3>
            <div className="flex flex-col gap-y-1">
              {resumeData?.education?.map((edu, index) => {
                return (
                  <div key={edu._id}>
                    <h4 className="text-[8px] font-bold">
                      {edu.degreeType} in {edu.studyField}
                    </h4>
                    <p className="text-[6px] text-gray-600">
                      {edu.schoolName} | {`${edu.schoolLocation}`}
                    </p>
                    <p className="text-[6px] text-gray-500">{`${edu.startDate} - ${edu.gradDate}`}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Organizations */}
        {/* <div className="bg-white p-2 rounded-md shadow">
              <h3 className="text-[8px] font-bold mb-1 flex items-center gap-1 text-blue-600">
                <Briefcase className="w-3 h-3" /> Organizations
              </h3>
              <ul className="space-y-1">
                <li className="text-[6px]">
                  American Management Association (2015 – Present)
                </li>
                <li className="text-[6px]">
                  Association of Private Enterprise Education (2014 – Present)
                </li>
                <li className="text-[6px]">
                  eBusiness Association (eBA) (2013 – Present)
                </li>
              </ul>
            </div> */}

        {/* Languages */}
        {/* <div className="bg-white p-2 rounded-md shadow">
              <h3 className="text-[8px] font-bold mb-1 flex items-center gap-1 text-blue-600">
                <Languages className="w-3 h-3" /> Languages
              </h3>
              <div className="space-y-1">
                {["English", "Spanish", "French"].map((language) => (
                  <div key={language} className="flex items-center gap-2">
                    <span className="text-[6px] w-12">{language}</span>
                    <div className="flex gap-[2px]">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-1 h-1 rounded-full ${
                            level <=
                            (language === "English"
                              ? 5
                              : language === "Spanish"
                              ? 4
                              : 2)
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
      </div>
    </section>
  );
};

export default Template3;
