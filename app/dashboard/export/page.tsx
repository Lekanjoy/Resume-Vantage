import Image from "next/image";
import editIcon from "@/public/assets/dashboard/editIcon.svg";
import downloadIcon from "@/public/assets/dashboard/download.svg";
import emailSendIcon from "@/public/assets/dashboard/emailSend.svg";
import BrandName from "@/components/brand-name";
import template from "@/public/assets/landing-page/template-3.png";

const ExportResume = () => {
  return (
    <section className="p-4 lg:px-8 lg:py-6 ">
      <BrandName className="lg:text-xl" />

      <div className="my-10 flex flex-col gap-y-1 lg:gap-y-3 lg:mb-16 lg:pl-10">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-4xl">
          Here’s your resume!
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
          You can choose to continue editing your resume, download, or send to
          your email.
        </p>
      </div>

      {/* Export Buttons */}
      <div className="mx-auto mb-10 w-fit flex justify-between text-sm text-[#40444B] gap-x-3 bg-[#FAFAFA] p-4 border-[#BDBDBD]/50 border rounded-xl lg:gap-x-10 lg:rounded-2xl">
        <button className="flex items-center gap-x-2 lg:gap-x-3">
          <Image src={editIcon} alt="edit icon" className="w-4 h-4" />
          <span>Edit resume</span>
        </button>

        <button className="flex items-center gap-x-2 lg:gap-x-3">
          <Image src={downloadIcon} alt="download icon" className="w-4 h-4" />
          <span>Download</span>
        </button>

        <button className="flex items-center gap-x-2 lg:gap-x-3">
          <Image
            src={emailSendIcon}
            alt="Send resume by email icon"
            className="w-4 h-4"
          />
          <span>Send via Email</span>
        </button>
      </div>

      {/* Resume Preview */}
      <div className="w-full border rounded-2xl mb-10 lg:mb-20 lg:w-[552px] mx-auto">
        <Image src={template} alt="resume template" className="w-full" />
      </div>

      <div className="flex justify-between mx-auto">
        <button className="p-4 border border-[#7758F3] bg-[#FAFAFA] text-[#7758F3] font-semibold lg:w-[327px]">
          Back
        </button>
        <button className="p-4 bg-[#7758F3] text-[#FAFAFA] font-semibold lg:w-[327px]">
          Save to drafts
        </button>
      </div>
    </section>
  );
};

export default ExportResume;
