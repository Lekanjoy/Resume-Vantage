"use client";
import Image from "next/image";
import { useTypedSelector } from "@/store/store";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import scanning from "@/public/assets/dashboard/scanning_doc.gif";

const ResumePreview2 = () => {
  const resumeData = useTypedSelector((state) => state.resume);
  const { status } = resumeData;

  const fullName = resumeData.fname + " " + resumeData.lname;
  const location = resumeData.city + ", " + resumeData.country;

  return (
    <>
      {status === "loading" ? (
        <div className="min-w-[250px] h-[300px] lg:w-[30%] lg:min-w-full">
          <Image
            src={scanning}
            alt="Loading Resume"
            className="w-full h-full"
          />
        </div>
      ) : (
        <section className="bg-white min-w-[250px] h-[300px] overflow-y-auto scrollbar-hide border border-secondaryColor-100/50 rounded-md p-1 flex flex-col lg:min-w-full">
          {/* Header Section */}
          <div className="flex flex-row gap-x-3 justify-between w-full border-b border-blue-400 pb-2 mb-2">
            <div className="space-y-px w-[60%]">
              <h1 className="text-[8px] font-bold">{fullName}</h1>
              <h2 className="text-blue-500 text-[8px]">{resumeData?.title}</h2>
              <p className="text-[6px] text-gray-600 max-w-md">
                {resumeData?.careerSummary}
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-1 w-[40%]">
              <div className="w-full flex items-center gap-x-px justify-between">
                <span className="text-[6px]">{resumeData?.email}</span>
                <Mail className="w-2 h-2" />
              </div>
              <div className="w-full flex items-center gap-x-px justify-between">
                <span className="text-[6px]">{resumeData?.phone}</span>
                <Phone className="w-2 h-2" />
              </div>
              <div className="w-full flex items-center gap-x-px justify-between">
                <span className="text-[6px]">{location}</span>
                <MapPin className="w-2 h-2" />
              </div>
              <div className="w-full flex items-center gap-x-px justify-between">
                <span className="text-[6px]">linkedin.com/in/john.doe</span>
                <Linkedin className="w-2 h-2" />
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-2">
            {resumeData?.experience?.length > 0 && (
              <h3 className="text-[8px] font-bold mb-2">WORK EXPERIENCE</h3>
            )}
            <div className="space-y-4">
              {resumeData?.experience?.map((exp, index) => {
                return (
                  <div key={exp._id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[8px] font-bold">{exp.jobTitle}</h4>
                        <p className="text-blue-500 text-[6px]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-[6px] text-gray-500">{`${exp.startDate} - ${exp.endDate}`}</span>
                    </div>
                    <p className="text-[6px] text-gray-500 italic">{`${exp.city} - ${exp.country}`}</p>
                    <ul className="list-disc list-inside space-y-px mt-1">
                      {exp?.responsibilities?.responsibilities?.map(
                        (desc, id) => {
                          return (
                            <li key={id} className="text-[6px] text-gray-600">
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

          {/* Skills */}
          <div className="mb-2">
            {resumeData?.skills?.length > 0 && (
              <h3 className="text-[8px] font-bold mb-1">SKILLS</h3>
            )}
            <div className="grid grid-cols-1 gap-2-y-1">
              {resumeData.skills.map((skill) => (
                <div key={skill} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[6px] font-medium">{skill}</span>
                  </div>
                  <div className="h-[2px] bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${80}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-2">
            {resumeData?.education?.length > 0 && (
              <h3 className="text-[8px] font-bold mb-1">EDUCATION</h3>
            )}

            {resumeData?.education?.map((edu, index) => {
              return (
                <div key={edu._id}>
                  <h4 className="text-[8px] font-bold">
                    {edu.degreeType} in {edu.studyField}
                  </h4>
                  <p className="text-[6px] text-gray-600">{edu.schoolName}</p>
                  <p className="text-[6px] text-gray-600">
                    {edu.schoolLocation}
                  </p>
                  <p className="text-[6px] text-gray-500">
                    {edu.startDate} {edu.stillEnrolled ? "-" : ""}{" "}
                    {edu.gradDate}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Organizations */}
          <div>
            {resumeData?.certifications?.length > 0 && (
              <h3 className="text-[8px] font-bold mb-1">ORGANIZATIONS</h3>
            )}
            {resumeData?.certifications?.map((det, index) => {
              return (
                <div key={index} className="flex flex-col mb-[1px]">
                  <h4 className="text-[8px] font-medium ">{det.title}</h4>
                  <p className="text-[6px] font-medium mb-[1px]">
                    {det.institution}
                  </p>
                  <p className="text-[6px] text-gray-400">{det.date}</p>
                </div>
              );
            })}
          </div>

          {/* Languages */}
          {/* <div>
            <h3 className="text-[8px] font-bold mb-1">LANGUAGES</h3>
            <div className="space-y-2">
              {["English", "Spanish", "French"].map((language) => (
                <div key={language} className="flex items-center gap-4">
                  <span className="text-[6px] w-20">{language}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 ${
                          level <=
                          (language === "English"
                            ? 5
                            : language === "Spanish"
                            ? 4
                            : 2)
                            ? "bg-blue-500"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>
      )}
    </>
  );
};

export default ResumePreview2;
