import React from "react";
import Button, { ButtonProps as DetailsProps } from "../button";
import { FileDown } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useTypedSelector } from "@/store/store";
import SimpleTemplate from "@/components/templates/SimpleTemplate";

const AdditionalDetails = ({
  currentIndex,
  handleNext,
  handlePrev,
}: DetailsProps) => {
  const resumeData = useTypedSelector((store) => store.resume);

  return (
    <div>
      AdditionalDetails
      <PDFDownloadLink
        document={<SimpleTemplate resumeData={resumeData} />}
        fileName="resume.pdf"
        className="mb-8 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FileDown className="w-5 h-5 mr-2" />
        Download PDF
      </PDFDownloadLink>
      <SimpleTemplate resumeData={resumeData} />
      <div className="w-full my-20 flex justify-center items-center">
        <Button
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default AdditionalDetails;
