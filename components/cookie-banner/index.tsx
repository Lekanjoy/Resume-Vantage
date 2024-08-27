"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [cookiesDisabled, setCookiesDisabled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
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

    // Check if the user has already seen the banner
    try {
      const bannerSeen = localStorage.getItem('cookieBannerSeen');
      if (bannerSeen && !cookiesDisabled) {
        setShowBanner(false);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      // If localStorage is not available, we'll show the banner
      setShowBanner(true);
    }
  }, [cookiesDisabled]);

  const handleAction = () => {
    if (cookiesDisabled) {
      alert(
        "To enable cookies, please follow these steps:\n\n" +
        "1. Open your browser settings\n" +
        "2. Find the privacy or security section\n" +
        "3. Enable cookies\n" +
        "4. Refresh this page"
      );
    } else {
      setShowBanner(false);
      try {
        localStorage.setItem('cookieBannerSeen', 'true');
      } catch (error) {
        console.error('Error setting localStorage:', error);
      }
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 30,
            duration: 0.5
          }}
          className="z-50 fixed w-4/5 shadow-md border rounded-md right-4 bottom-5 bg-white p-4 md:w-2/5 lg:w-[400px]"
        >
          <h1 className="text-secondaryColor font-semibold mb-3">We use cookies!</h1>
          <p className="text-sm text-secondaryColor-100">
            {cookiesDisabled 
              ? "Hi, this webapp uses essential cookies to ensure its proper operation. Please enable cookies to continue."
              : "Hi, this webapp uses essential cookies to ensure its proper operation. By using this webapp you agree to our cookie policy."}
          </p>
          <button
            onClick={handleAction}
            className="px-4 py-2 text-white rounded bg-primaryColor text-sm mt-3 font-medium"
          >
            {cookiesDisabled ? "Enable Cookies" : "Accept"}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;