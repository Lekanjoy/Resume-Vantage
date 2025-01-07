import Image from "next/image";
import template1 from "@/public/assets/landing-page/template-1.png";
import template2 from "@/public/assets/landing-page/template-2.png";
import template3 from "@/public/assets/landing-page/template-3.png";
import { IoMdClose } from "react-icons/io";
import { updateTemplate } from "@/features/resumeTemplateSlice";
import { useAppDispatch } from "@/store/store";
import { templatesData } from "@/data";

interface TemplateModalProps {
  closeModal: () => void;
}

const TemplateModal = ({ closeModal }: TemplateModalProps) => {
  const dispatch = useAppDispatch();

  const selectTemplate = (id: string) => {
    dispatch(updateTemplate(id));
    closeModal()
  };
  return (
    <div className="bg-black/50 px-10 flex justify-center items-center fixed w-full h-screen z-50 left-0 top-0 lg:px-20">
      <div className="relative bg-white w-full h-[90dvh] rounded-2xl p-6 overflow-y-auto lg:p-20">
        <h2 className=" font-bold mb-2 text-2xl lg:text-4xl">
          Choose a template
        </h2>
        <p className="text-secondaryColor">
          Our resume templates are based on what employers actually look for in
          a candidate. How do we know? We’ve talked with thousand of employers
          to get the answers.
        </p>

        <div className="grid grid-cols-3  gap-x-5 mt-4 lg:mt-10">
          {templatesData.map((template) => {
            return (
              <div onClick={() => selectTemplate(template.name)} key={template.id} className="w-[190px] h-[265px] border rounded-xl hover:scale-110 ease-in-out duration-500 ">
                <Image
                  src={template.img}
                  alt="template cv"
                  className="w-full h-full"
                />
                <p className="text-xs text-center font-bold text-[#FAFAFA] mt-3 lg:text-base lg:mt-4 2xl:text-lg">
                  {template.text}
                </p>
              </div>
            );
          })}
        </div>

        <IoMdClose
          onClick={closeModal}
          size={20}
          className="absolute cursor-pointer top-2 right-4 text-red-700 ease-linear hover:scale-110"
        />
      </div>
    </div>
  );
};

export default TemplateModal;
