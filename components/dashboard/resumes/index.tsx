import { resumeDataProps } from "@/types";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";

const Resume = ({ resumeData }: resumeDataProps) => {
  return (
    <section className="bg-white max-w-full h-[250px] overflow-y-auto scrollbar-hide flex flex-col border border-secondaryColor-100/50 rounded-md p-1  lg:min-w-full">
      {resumeData.templateType === "template1" ? (
        <Template1 resumeData={resumeData} />
      ) : resumeData.templateType === "template2" ? (
        <Template2 resumeData={resumeData} />
      ) : (
        <Template3 resumeData={resumeData} />
      )}
    </section>
  );
};
export default Resume;
