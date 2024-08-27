import { motion, AnimatePresence } from "framer-motion";
import { CircleAlert, CircleCheckBig } from "lucide-react";

interface ToastProps {
  message: string;
  variant: "success" | "error";
  isVisible: boolean;
}

const Toast = ({ message, variant, isVisible }: ToastProps) => {
  const borderColor =
    variant === "success" ? "border-green-500" : "border-red-500";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`z-50 min-w-[250px] fixed top-4 right-4 p-4 rounded-md shadow-md bg-white border ${borderColor}`}
        >
          <p
            className={`flex gap-x-2 items-center text-sm text-secondaryColor-100`}
          >
            {variant === "success" ? (
              <CircleCheckBig size={14} color="green" />
            ) : (
              <CircleAlert size={14} color="red" />
            )}{" "}
            <span>{message}</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
