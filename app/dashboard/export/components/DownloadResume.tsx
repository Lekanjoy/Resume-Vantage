"use client";
import Image from "next/image";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useTypedSelector } from "@/store/store";
import SimpleTemplate from "@/components/templates/SimpleTemplate";
import ModernTemplate from "@/components/templates/ModernTemplate";
import ColorfulTemplate from "@/components/templates/ColorfulTemplate";
import downloadIcon from "@/public/assets/dashboard/download.svg";

const DownloadResume = ({
  template,
}: {
  template: string | string[] | undefined;
}) => {
  const resumeData = useTypedSelector((store) => store.resume);

  // Helper function to get the template component by type
  const docTodDownload =
    template === "template1" ? (
      <SimpleTemplate resumeData={resumeData} />
    ) : template === "template2" ? (
      <ModernTemplate resumeData={resumeData} />
    ) : template === "template3" ? (
      <ColorfulTemplate resumeData={resumeData} />
    ) : (
      <SimpleTemplate resumeData={resumeData} />
    );

  // Get the filename based on the template
  const getFileName = () => {
    if (Array.isArray(template)) {
      return `${template[0]}-resume.pdf`;
    } else if (typeof template === "string") {
      return `${template}-resume.pdf`;
    } else {
      return "resume.pdf";
    }
  };

  return (
    <PDFDownloadLink
      document={docTodDownload}
      fileName={getFileName()}
      className="flex items-center gap-x-2 lg:gap-x-3"
    >
      <Image src={downloadIcon} alt="download icon" className="w-4 h-4" />
      <span>Download</span>
    </PDFDownloadLink>
  );
};

export default DownloadResume;
