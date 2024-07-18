import CustomInput from "@/components/input";
import Image from "next/image";
import template from "@/public/assets/landing-page/template-1.png";

const UserHeader = () => {
  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:mb-14">
        <h1 className="text-secondary text-lg font-semibold lg:text-5xl">
          First, work on your header
        </h1>
        <p className="text-xs text-secondary-100 lg:text-sm">
          Enter your personal details and contact information.
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-12 lg:flex-row  lg:gap-x-10 lg:justify-between">
        <form
          action=""
          className="flex flex-col flex-shrink-0 gap-y-6 lg:grid lg:w-[70%] lg:grid-cols-2 lg:gap-x-8"
        >
          <CustomInput
            id={"fname"}
            type={"text"}
            label={"First Name"}
            placeholder={"Flourish"}
          />
          <CustomInput
            id={"lname"}
            type={"text"}
            label={"Last Name"}
            placeholder={"Ralph"}
          />
          <CustomInput
            id={"city"}
            type={"text"}
            label={"City"}
            placeholder={"London"}
          />
          <CustomInput
            id={"ctry"}
            type={"text"}
            label={"Country"}
            placeholder={"United Kingdom"}
          />
          <CustomInput
            id={"phone"}
            type={"phone"}
            label={"Phone Number"}
            placeholder={"+44 1234 56789"}
          />
          <CustomInput
            id={"email"}
            type={"email"}
            label={"Email Address"}
            placeholder={"Floralph@gmail.com"}
          />
        </form>
        <div className="w-full border border-primary rounded-md lg:w-[30%]">
          <Image src={template} alt="templates" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default UserHeader;
