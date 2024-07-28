import Image from "next/image";
import { motion } from "framer-motion";
import illust from "@/public/assets/auth/Dayflow Computer 2.png";

const ResetStatus = () => {
  const variants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ type: "spring", stiffness: 50 }}
      className=" fixed inset-0 top-0 left-0 z-10 flex flex-col  justify-center items-center w-full h-dvh bg-white px-6 "
    >
      <div className=" flex flex-col justify-center items-center gap-y-12 lg:max-w-[800px]">
        <div className="w-[270px] h-[270px] lg:max-w-[370px] lg:max-h-[370px]">
          <Image
            src={illust}
            alt="Password reset success illustration"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col items-center text-center text-secondaryColor gap-x-2">
          <h1 className="text-lg font-semibold lg:text-5xl">
            Password Reset Link Sent!
          </h1>
          <p className="text-xs text-secondaryColor lg:text-base">
            We just sent the password reset link to{" "}
            <span className="text-primaryColor">flourishralph@gmail.com.</span>{" "}
            Click the link to reset your password and then proceed to log in. Be
            sure to check your{" "}
            <span className="text-primaryColor">spam/junk</span> folder if you
            didn’t get an email.
          </p>
        </div>
        <p className="text-xs text-secondaryColor lg:text-base">
          Didn’t receive a link?{" "}
          <span className="text-primaryColor">Contact support</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ResetStatus;
