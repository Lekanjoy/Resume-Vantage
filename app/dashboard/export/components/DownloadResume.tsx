"use client";
import Image from "next/image";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useTypedSelector } from "@/store/store";
import SimpleTemplate from "@/components/templates/SimpleTemplate";
import downloadIcon from "@/public/assets/dashboard/download.svg";

const DownloadResume = () => {
  const resumeData = useTypedSelector((store) => store.resume);

  return (
    <PDFDownloadLink
      document={<SimpleTemplate resumeData={resumeData} />}
      fileName="resume.pdf"
      className="flex items-center gap-x-2 lg:gap-x-3"
    >
      <Image src={downloadIcon} alt="download icon" className="w-4 h-4" />
      <span>Download</span>
    </PDFDownloadLink>
  );
};

export default DownloadResume;
