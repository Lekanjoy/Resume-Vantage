"use client";
import { store } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookiesEnabled, setCookiesEnabled] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkCookies = () => {
      try {
        document.cookie = "testcookie=1";
        const cookieEnabled = document.cookie.indexOf("testcookie") !== -1;
        document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        setCookiesEnabled(cookieEnabled);
      } catch (e) {
        setCookiesEnabled(false);
      }
    };

    checkCookies();
  }, []);

  useEffect(() => {
    if (!cookiesEnabled && pathname !== "/") {
      router.push("/");
    }
  }, [cookiesEnabled, pathname, router]);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
