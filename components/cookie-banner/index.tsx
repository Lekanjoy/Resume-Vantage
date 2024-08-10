"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [cookiesDisabled, setCookiesDisabled] = useState(false);

  useEffect(() => {
    // Check if cookies are disabled
    const checkCookies = () => {
      try {
        document.cookie = "testcookie=1";
        const cookieEnabled = document.cookie.indexOf("testcookie") !== -1;
        document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        setCookiesDisabled(!cookieEnabled);
      } catch (e) {
        setCookiesDisabled(true);
      }
    };

    checkCookies();
  }, []);

  const handleAccept = () => {
    // Show instructions on how to enable cookies
    alert(
      "To enable cookies, please follow these steps:\n\n" +
        "1. Open your browser settings\n" +
        "2. Find the privacy or security section\n" +
        "3. Enable cookies\n" +
        "4. Refresh this page"
    );
  };

  return (
    <AnimatePresence>
      {cookiesDisabled && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="z-50 fixed w-full left-0 bottom-0 text-center bg-primaryColor text-white py-4 text-sm"
        >
          <p className="text-base">
            This site requires cookies to function properly. Please enable cookies
            to continue.
          </p>
          <button
            onClick={handleAccept}
            className="px-3 py-2 bg-white rounded text-primaryColor mt-2 font-medium"
          >
            Enable Cookies
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;