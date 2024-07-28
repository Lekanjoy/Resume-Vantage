import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import illust from "@/public/assets/auth/Dayflow Chat Ok.png";

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
      className=" fixed inset-0 top-0 left-0 z-10 flex flex-col gap-y-12 justify-center items-center w-full h-dvh bg-white"
    >
      <div className="w-[270px] h-[270px] lg:max-w-[370px] lg:max-h-[370px]">
        <Image
          src={illust}
          alt="Password reset success illustration"
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col items-center text-secondaryColor gap-x-2">
        <h1 className="text-lg font-semibold lg:text-5xl">
          Your Password Has Been Successfully Reset!
        </h1>
        <p className="text-xs text-secondaryColor lg:text-base">
          Now, you can proceed to{" "}
          <Link href="/login" className="text-primaryColor">
            log in
          </Link>{" "}
          with your new password
        </p>
      </div>
    </motion.div>
  );
};

export default ResetStatus;
