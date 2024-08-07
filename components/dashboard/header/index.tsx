"use client";
import CustomInput from "@/components/input";
import ResumePreview from "@/components/resume-preview";
import { useState } from "react";

const UserHeader = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <div className="mb-10 flex flex-col gap-y-1 lg:mb-14">
        <h1 className="text-secondaryColor text-lg font-semibold lg:text-5xl">
          First, work on your header
        </h1>
        <p className="text-xs text-secondaryColor-100 lg:text-sm">
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <CustomInput
            id={"lname"}
            type={"text"}
            label={"Last Name"}
            placeholder={"Ralph"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <CustomInput
            id={"city"}
            type={"text"}
            label={"City"}
            placeholder={"London"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <CustomInput
            id={"ctry"}
            type={"text"}
            label={"Country"}
            placeholder={"United Kingdom"}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <CustomInput
            id={"phone"}
            type={"phone"}
            label={"Phone Number"}
            placeholder={"+44 1234 56789"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <CustomInput
            id={"email"}
            type={"email"}
            label={"Email Address"}
            placeholder={"Floralph@gmail.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <div className="w-full border border-primaryColor rounded-md lg:w-[30%]">
          <ResumePreview />
        </div>
      </div>
    </>
  );
};

export default UserHeader;
